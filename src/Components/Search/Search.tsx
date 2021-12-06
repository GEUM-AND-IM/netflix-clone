import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { getSearch, IGetSearchResult } from "../../API/getSearch";
import useMovie from "../../Hooks/Home/Movie/useMovie";
import { makeImgPath } from "../../util/makeImgPath";
import {
  SearchLoader,
  SearchNotice,
  SearchResultWrap,
  SearchWrapper,
  SearchBox,
  SearchInfo,
  SearchImg,
} from "./Search.style";

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
          {data && (
            <>
              <SearchNotice>{`${keyword}에 대한 ${data.results?.length}개의 검색결과`}</SearchNotice>
              {data?.results.map((result) => {
                return (
                  <SearchBox>
                    <span>
                      <h1>
                        {result.title ? result.title : result.original_name}(
                        {result.release_date?.slice(0, 4)})
                      </h1>
                      <h2>
                        {result.vote_average}⭐• {result.media_type}(
                        {result.original_language})
                      </h2>
                    </span>
                    <span>
                      <SearchInfo>
                        {result.overview.slice(0, 300)}...
                      </SearchInfo>
                      <SearchImg
                        src={makeImgPath(result.backdrop_path, "w300")}
                      />
                    </span>
                  </SearchBox>
                );
              })}
            </>
          )}
        </SearchResultWrap>
      )}
    </SearchWrapper>
  );
};
export default Search;
