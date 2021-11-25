import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../../API/getMovies";
import { makeImgPath } from "../../util/makeImgPath";
import { motion, AnimatePresence } from "framer-motion";
import {
  Banner,
  Box,
  Loader,
  Overview,
  Row,
  rowVariants,
  Slider,
  Title,
  Wrapper,
} from "./Home.style";
import { useState } from "react";

const Home: React.FC = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const [index, setIndex] = useState<number>(0);
  const incraseIndex = () => setIndex((prev) => prev + 1);
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
            <AnimatePresence>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
                transition={{ type: "tween", duration: 1 }}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <Box key={index}>{item}</Box>
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
