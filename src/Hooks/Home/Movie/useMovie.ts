import { useViewportScroll } from "framer-motion";
import { useHistory } from "react-router";

const useMovie = () => {
  const history = useHistory();
  const { scrollY } = useViewportScroll();
  const onBoxClicked = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };

  const onOverlayClick = () => history.push("/");

  return { onBoxClicked, onOverlayClick, scrollY };
};

export default useMovie;
