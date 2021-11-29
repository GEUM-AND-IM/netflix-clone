import { atom } from "recoil";
import { IMovie } from "../API/getMovies";

export const movieData = atom<IMovie[]>({
  key: "movieData",
  default: [],
});
