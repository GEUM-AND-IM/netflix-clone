import { useQuery } from "react-query";
import { getMovieDetail, IGetMovieDetail } from "../../../API/getMovieDetail";
import useMovie from "../../../Hooks/Home/Movie/useMovie";
import { makeImgPath } from "../../../util/makeImgPath";
import {
  BigCover,
  BigMovie,
  BigTitle,
  MovieHd,
  MovieInfoWrap,
  MovieLeftInfo,
  MovieLeftTopWrap,
  MovieOverView,
  MovieRightInfo,
  OverLay,
} from "./BigMovieModal.style";

interface IBigMovieModalProps {
  movieId: string;
}

const BigMovieModal: React.FC<IBigMovieModalProps> = ({ movieId }) => {
  const { isLoading, data } = useQuery<IGetMovieDetail>(
    [`movie${movieId}`, "detail"],
    () => getMovieDetail(movieId)
  );

  const { onOverlayClick, scrollY } = useMovie();

  return (
    <>
      {isLoading ? null : (
        <>
          <OverLay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <BigMovie layoutId={movieId} style={{ top: scrollY.get() + 100 }}>
            {data && (
              <>
                <BigCover bgPhoto={makeImgPath(data.backdrop_path, "w500")}>
                  <BigTitle>{data.title}</BigTitle>
                </BigCover>
                <MovieInfoWrap>
                  <MovieLeftInfo>
                    <MovieLeftTopWrap>
                      <h3>{Math.floor(data?.popularity)}% 흥행</h3>
                      <span>{data?.release_date.slice(0, 4)}</span>
                      <span>
                        {Math.floor(data?.runtime / 60)}시 {data?.runtime % 60}
                        분
                      </span>
                      <MovieHd>HD</MovieHd>
                    </MovieLeftTopWrap>
                    <MovieOverView>{data?.overview}</MovieOverView>
                  </MovieLeftInfo>
                  <MovieRightInfo>
                    <p>
                      <span>장르:</span>
                      {data?.genres
                        .map((genre) => {
                          return genre.name;
                        })
                        .join(",")}
                    </p>
                    <p>
                      <span>평점:</span>
                      {data?.vote_average}점
                    </p>
                    <p>
                      <span>평가 횟수:</span>
                      {data?.vote_count}회
                    </p>
                    <p>
                      <span>영화사:</span>
                      {data?.production_companies[0].name}
                    </p>
                    <p>
                      <span>예산:</span>
                      {data?.budget ? data.budget + "원" : "미추정"}
                    </p>
                  </MovieRightInfo>
                </MovieInfoWrap>
              </>
            )}
          </BigMovie>
        </>
      )}
    </>
  );
};

export default BigMovieModal;
