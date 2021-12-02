import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { getSearch, IGetSearchResult } from "../../API/getSearch";

const Search: React.FC = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data, isLoading } = useQuery<IGetSearchResult>(
    [`movie${keyword}`, "search"],
    () => getSearch(keyword)
  );

  console.log(data);

  return <div></div>;
};
export default Search;
