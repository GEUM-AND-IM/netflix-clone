import useMovie from "../../../Hooks/Home/Movie/useMovie";
import { BigMovie, OverLay } from "./BigMovieModal.style";

interface IBigMovieModalProps {
  movieId: string;
}

const BigMovieModal: React.FC<IBigMovieModalProps> = ({ movieId }) => {
  const { onOverlayClick } = useMovie();

  return (
    <>
      <OverLay onClick={onOverlayClick} />
      <BigMovie layoutId={movieId} />
    </>
  );
};

export default BigMovieModal;
