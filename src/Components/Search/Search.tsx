import React from "react";
import { useLocation } from "react-router";

const Search: React.FC = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);

  return <div></div>;
};
export default Search;
