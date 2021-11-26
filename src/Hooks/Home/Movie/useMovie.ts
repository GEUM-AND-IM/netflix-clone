import { useHistory } from "react-router";

const useMovie = () => {
  const history = useHistory();
  const onBoxClicked = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };

  return { onBoxClicked };
};

export default useMovie;
