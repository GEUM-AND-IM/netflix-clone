import React from "react";
import { useQuery } from "react-query";
import { getTvProDetail, ITvProDeatil } from "../../../API/getTvProDetail";
import useTvDetail from "../../../Hooks/Tv/useTvDetail";
import { makeImgPath } from "../../../util/makeImgPath";
import {
  BigTvCover,
  BigTvHd,
  BigTvInfoWrap,
  BigTvLeftInfo,
  BigTvLeftTopWrap,
  BigTvpro,
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
                  </BigTvLeftInfo>
                </BigTvInfoWrap>
              </>
            )}
          </BigTvpro>
        </>
      )}
    </>
  );
};

export default BigTvProModal;
