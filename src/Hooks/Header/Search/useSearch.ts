import { useRecoilState } from "recoil";
import { searchClick } from "../../../Store/searchClick";

const useSearch = () => {
  const [searchOpen, setSearchOpen] = useRecoilState(searchClick);

  const toggleSearch = () => setSearchOpen((prev) => !prev);

  return { toggleSearch };
};

export default useSearch;
