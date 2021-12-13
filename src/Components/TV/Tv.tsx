import { AnimatePresence } from "framer-motion";
import React from "react";
import { useRouteMatch } from "react-router";
import { useRecoilState } from "recoil";
import useGetTvPros from "../../Hooks/Tv/useGetTvPros";
import useTvDetail from "../../Hooks/Tv/useTvDetail";
import { tvProsData } from "../../Store/tvProsData";
import { makeImgPath } from "../../util/makeImgPath";
import {
  boxImgVariants,
  boxVariants,
  Info,
  infoVariants,
  Loader,
  Movie,
  MovieImg,
  MovieWrap,
  Wrapper,
} from "../Home/Home.style";
import BigTvProModal from "./BigTvProModal";

const Tv: React.FC = () => {
  const [tvpros, setTvPros] = useRecoilState(tvProsData);
  const { isLoading } = useGetTvPros();
  const { onTvProModalClicked } = useTvDetail();
  const bigTvProMatch = useRouteMatch<{ tvproId: string }>("/tvpros/:tvproId");

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <MovieWrap>
            {tvpros?.map((tvpros) => {
              return (
                <Movie
                  initial="normal"
                  whileHover="hover"
                  variants={boxVariants}
                  layoutId={tvpros.id + ""}
                  onClick={() => onTvProModalClicked(tvpros.id)}
                >
                  <MovieImg
                    variants={boxImgVariants}
                    src={makeImgPath(tvpros.backdrop_path, "w300")}
                    title={
                      tvpros.backdrop_path === null
                        ? "이미지 없음"
                        : tvpros.name
                    }
                  />
                  <Info variants={infoVariants}>
                    <h4>{tvpros.name}</h4>
                    <span>평점 : {tvpros.vote_average}⭐</span>
                    <span>평점 횟수 : {tvpros.vote_count}회</span>
                  </Info>
                </Movie>
              );
            })}
            <AnimatePresence>
              {bigTvProMatch && (
                <BigTvProModal tvproId={bigTvProMatch.params.tvproId + ""} />
              )}
            </AnimatePresence>
          </MovieWrap>
        </>
      )}
    </Wrapper>
  );
};

export default Tv;
