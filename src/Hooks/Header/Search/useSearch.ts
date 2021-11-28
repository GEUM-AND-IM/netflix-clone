import { useAnimation } from "framer-motion";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { searchClick } from "../../../Store/searchClick";

const useSearch = () => {
  const [searchOpen, setSearchOpen] = useRecoilState(searchClick);
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  return { toggleSearch, inputAnimation, navAnimation };
};

export default useSearch;
