import { useViewportScroll } from "framer-motion";
import { useHistory } from "react-router";

const useTvDetail = () => {
  const history = useHistory();
  const { scrollY } = useViewportScroll();
  const onTvProModalClicked = (tvproId: number) => {
    history.push(`/tvpros/${tvproId}`);
  };

  const onTvProOverlayClick = () => history.push("/tv");

  return { onTvProModalClicked, onTvProOverlayClick, scrollY };
};

export default useTvDetail;
