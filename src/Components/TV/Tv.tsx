import React from "react";
import { useRecoilState } from "recoil";
import useGetTvPros from "../../Hooks/Tv/useGetTvPros";
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

const Tv: React.FC = () => {
  const { isLoading } = useGetTvPros();
  const [tvpros, setTvPros] = useRecoilState(tvProsData);

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
                    <span>평점 : ⭐{tvpros.vote_average}</span>
                    <span>평점 횟수 : {tvpros.vote_count}회</span>
                  </Info>
                </Movie>
              );
            })}
          </MovieWrap>
        </>
      )}
    </Wrapper>
  );
};

export default Tv;
