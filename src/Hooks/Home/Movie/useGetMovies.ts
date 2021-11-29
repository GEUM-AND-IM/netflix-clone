import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { getMovies, IMovie } from "../../../API/getMovies";
import { movieData } from "../../../Store/movieData";

const useGetMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useRecoilState(movieData);
  const resetMovie = useResetRecoilState(movieData);

  const loadMovie = async (index: number) => {
    const res = await getMovies(index);
    res.results.map((movie: IMovie) => {
      setMovies((prev) => [...prev, movie]);
    });
  };

  useEffect(() => {
    resetMovie();
    setIsLoading(true);
    for (let i = 1; i <= 5; i++) {
      loadMovie(i);
    }
    setIsLoading(false);
  }, []);

  return { isLoading };
};

export default useGetMovies;
