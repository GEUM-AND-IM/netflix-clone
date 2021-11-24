import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies } from "../API/getMovies";

const Home = styled.div`
  height: 2000px;
`;

const HomePage: React.FC = () => {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data);
  return (
    <section id="Home">
      <Home>asda</Home>
    </section>
  );
};

export default HomePage;
