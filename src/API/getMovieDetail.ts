import axios from "axios";
import { API_KEY, BASE_PATH } from "../config/config.json";

interface IMovieDetailGenre {
  id: number;
  name: string;
}

interface IMovieDetailCompanies {
  name: string;
}

export interface IGetMovieDetail {
  backdrop_path: string;
  budget: number;
  genres: IMovieDetailGenre[];
  release_date: string;
  original_title: string;
  overview: string;
  production_companies: IMovieDetailCompanies[];
  runtime: number;
  vote_average: number;
  vote_count: number;
  title: string;
  tagline: string;
  belongs_to_collection: {
    name: string;
  };
  popularity: number;
}

export const getMovieDetail = async (movieId: string) => {
  const url = `${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}&language=ko`;
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (error) {
    const data = error;
    return data;
  }
};
