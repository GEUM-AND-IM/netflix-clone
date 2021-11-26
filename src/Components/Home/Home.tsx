import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../../API/getMovies";
import { makeImgPath } from "../../util/makeImgPath";
import { AnimatePresence } from "framer-motion";
import {
  Banner,
  Box,
  BoxImg,
  boxImgVariants,
  boxVariants,
  Info,
  infoVariants,
  Loader,
  Overview,
  Row,
  rowVariants,
  Slider,
  Title,
  Wrapper,
} from "./Home.style";
import useSlider from "../../Hooks/Home/Slider/useSlider";

const Home: React.FC = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const { index, leaving, offset, setLeaving, setIndex } = useSlider();

  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={incraseIndex}
            bgPhoto={makeImgPath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie, idx) => (
                    <Box
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: "tween" }}
                    >
                      <BoxImg
                        variants={boxImgVariants}
                        src={makeImgPath(movie.backdrop_path, "w500")}
                      />
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
