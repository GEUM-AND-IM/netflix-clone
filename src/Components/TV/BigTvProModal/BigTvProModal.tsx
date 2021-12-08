import React from "react";
import { useQuery } from "react-query";
import { getTvProDetail, ITvProDeatil } from "../../../API/getTvProDetail";
import useTvDetail from "../../../Hooks/Tv/useTvDetail";
import { BigTvpro, TvModalOvreLay } from "./BigTvProModal.style";

interface IBigTvProModalProps {
  tvproId: string;
}

const BigTvProModal: React.FC<IBigTvProModalProps> = ({ tvproId }) => {
  const { isLoading, data } = useQuery<ITvProDeatil>(
    [`tvPro${tvproId}`, "detail"],
    () => getTvProDetail(tvproId)
  );

  console.log(data);

  const { onTvProOverlayClick, scrollY } = useTvDetail();

  return (
    <>
      {isLoading ? null : (
        <>
          <TvModalOvreLay
            onClick={onTvProOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <BigTvpro
            layoutId={tvproId}
            style={{ top: scrollY.get() + 100 }}
          ></BigTvpro>
        </>
      )}
    </>
  );
};

export default BigTvProModal;
