import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../../API/getMovies";
import { makeImgPath } from "../../util/makeImgPath";
import { Banner, Loader, Overview, Title, Wrapper } from "./Home.style";

const Home: React.FC = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  console.log(data);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImgPath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
