import React from "react";
import { useQuery } from "react-query";
import { getTvProDetail, ITvProDeatil } from "../../../API/getTvProDetail";
import useTvDetail from "../../../Hooks/Tv/useTvDetail";
import { makeImgPath } from "../../../util/makeImgPath";
import { MovieOverView } from "../../Home/BigMovieModal/BigMovieModal.style";
import {
  BigLastUpdataBox,
  BigLastUpdataBoxOverview,
  BigLastUpdataInfo,
  BigTvAllInfoWrap,
  BigTvCover,
  BigTvHd,
  BigTvInfoWrap,
  BigTvLeftInfo,
  BigTvLeftTopWrap,
  BigTvpro,
  BigTvRightInfo,
  BigTvTitle,
  TvModalOvreLay,
} from "./BigTvProModal.style";

interface IBigTvProModalProps {
  tvproId: string;
}

const BigTvProModal: React.FC<IBigTvProModalProps> = ({ tvproId }) => {
  const { isLoading, data } = useQuery<ITvProDeatil>(
    [`tvPro${tvproId}`, "detail"],
    () => getTvProDetail(tvproId)
  );

  const { onTvProOverlayClick, scrollY } = useTvDetail();
  console.log(data);

  return (
    <>
      {isLoading ? null : (
        <>
          <TvModalOvreLay
            onClick={onTvProOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <BigTvpro layoutId={tvproId} style={{ top: scrollY.get() + 100 }}>
            {data && (
              <>
                <BigTvCover bgPhoto={makeImgPath(data?.backdrop_path, "w500")}>
                  <BigTvTitle>{data?.name}</BigTvTitle>
                </BigTvCover>
                <BigTvAllInfoWrap>
                  <BigTvInfoWrap>
                    <BigTvLeftInfo>
                      <BigTvLeftTopWrap>
                        <h3>{Math.floor(data?.popularity)}%흥행</h3>
                        <span>{data?.first_air_date.slice(0, 4)}</span>
                        <span>
                          평균 {Math.floor(data?.episode_run_time[0])}분
                        </span>
                        <BigTvHd>HD</BigTvHd>
                      </BigTvLeftTopWrap>
                      <MovieOverView>
                        {data?.overview === "" ? "개요 없음" : data.overview}
                      </MovieOverView>
                    </BigTvLeftInfo>
                    <BigTvRightInfo>
                      <p>
                        <span>장르:</span>
                        {data?.genres
                          .map((genre) => {
                            return genre.name;
                          })
                          .join(", ")}
                      </p>
                      <p>
                        <span>평점:</span>
                        {data?.vote_average}점
                      </p>
                      <p>
                        <span>평가 횟수:</span>
                        {data?.vote_count}회
                      </p>
                    </BigTvRightInfo>
                  </BigTvInfoWrap>
                  <BigLastUpdataInfo>
                    <span>
                      <h1>마지막 업데이트</h1>
                      <h2>시즌 {data?.last_episode_to_air.season_number}</h2>
                    </span>
                    <BigLastUpdataBox>
                      <h3>{data?.last_episode_to_air.episode_number}</h3>
                      <img
                        src={makeImgPath(
                          data?.last_episode_to_air.still_path,
                          "w500"
                        )}
                        title={
                          data?.last_episode_to_air.still_path === null
                            ? "이미지 없음"
                            : data?.last_episode_to_air.name
                        }
                      />
                      <BigLastUpdataBoxOverview>
                        <h4>{data?.last_episode_to_air.name}</h4>
                        <p>
                          {data?.last_episode_to_air.overview === ""
                            ? "개요 없음"
                            : data?.last_episode_to_air.overview}
                        </p>
                      </BigLastUpdataBoxOverview>
                    </BigLastUpdataBox>
                  </BigLastUpdataInfo>
                </BigTvAllInfoWrap>
              </>
            )}
          </BigTvpro>
        </>
      )}
    </>
  );
};

export default BigTvProModal;
