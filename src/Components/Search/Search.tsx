import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { getSearch, IGetSearchResult } from "../../API/getSearch";
import useMovie from "../../Hooks/Home/Movie/useMovie";
import { makeImgPath } from "../../util/makeImgPath";
import {
  BoxImg,
  boxImgVariants,
  boxVariants,
  Info,
  infoVariants,
  Movie,
} from "../Home/Home.style";
import { SearchLoader, SearchResultWrap, SearchWrapper } from "./Search.style";

const Search: React.FC = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data, isLoading } = useQuery<IGetSearchResult>(
    [`movie${keyword}`, "search"],
    () => getSearch(keyword)
  );
  const { onBoxClicked } = useMovie();

  console.log(data);

  return (
    <SearchWrapper>
      {isLoading ? (
        <SearchLoader>Loading...</SearchLoader>
      ) : (
        <SearchResultWrap>
          {data?.results.map((result) => {
            return (
              <Movie
                initial="normal"
                whileHover="hover"
                variants={boxVariants}
                layoutId={result.id + ""}
                onClick={() => onBoxClicked(result.id)}
              >
                <BoxImg
                  variants={boxImgVariants}
                  src={makeImgPath(result.backdrop_path, "w500")}
                  alt="이미지가 없습니다."
                  title="searchImg"
                />
                <Info variants={infoVariants}>
                  <h4>{result.title}</h4>
                  <span>평점 : ⭐{result.vote_average}</span>
                  <span>평점 횟수 : {result.vote_count}회</span>
                </Info>
              </Movie>
            );
          })}
        </SearchResultWrap>
      )}
    </SearchWrapper>
  );
};
export default Search;
