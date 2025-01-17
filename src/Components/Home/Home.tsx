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
  Movie,
  MovieImg,
  MovieWrap,
  Overview,
  Row,
  rowVariants,
  Slider,
  SliderBtn,
  Title,
  Wrapper,
} from "./Home.style";
import useSlider from "../../Hooks/Home/Slider/useSlider";
import useMovie from "../../Hooks/Home/Movie/useMovie";
import { useRouteMatch } from "react-router";
import BigMovieModal from "./BigMovieModal";
import useGetMovies from "../../Hooks/Home/Movie/useGetMovies";
import { useRecoilState } from "recoil";
import { movieData } from "../../Store/movieData";

const Home: React.FC = () => {
  const [movies, setMovies] = useRecoilState(movieData);

  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");

  const { index, leaving, offset, setLeaving, setIndex } = useSlider();
  const { onBoxClicked } = useMovie();
  const { isLoading } = useGetMovies();

  const incraseIndex = () => {
    if (movies) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = movies?.length / 3 - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      console.log(totalMovies, maxIndex);
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
          <Banner bgPhoto={makeImgPath(movies[0]?.backdrop_path || "")}>
            <Title>{movies[0]?.title}</Title>
            <Overview>{movies[0]?.overview}</Overview>
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
                {movies
                  ?.slice(1, 19)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: "tween" }}
                      onClick={() => onBoxClicked(movie.id)}
                    >
                      <BoxImg
                        variants={boxImgVariants}
                        src={makeImgPath(movie.backdrop_path, "w500")}
                      />
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                        <span>평점 : {movie.vote_average}⭐</span>
                        <span>평점 횟수 : {movie.vote_count}회</span>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
            <SliderBtn onClick={incraseIndex}>
              <svg viewBox="0 0 20 20">
                <path
                  fill="white"
                  d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                ></path>
              </svg>
            </SliderBtn>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <BigMovieModal movieId={bigMovieMatch.params.movieId + ""} />
            ) : null}
          </AnimatePresence>
          <MovieWrap>
            {movies?.slice(19, movies.length).map((movie) => {
              return (
                <Movie
                  initial="normal"
                  whileHover="hover"
                  variants={boxVariants}
                  layoutId={movie.id + ""}
                  onClick={() => onBoxClicked(movie.id)}
                >
                  <MovieImg
                    variants={boxImgVariants}
                    src={makeImgPath(movie.backdrop_path, "w300")}
                  />
                  <Info variants={infoVariants}>
                    <h4>{movie.title}</h4>
                    <span>평점 : {movie.vote_average}⭐</span>
                    <span>평점 횟수 : {movie.vote_count}회</span>
                  </Info>
                </Movie>
              );
            })}
          </MovieWrap>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
