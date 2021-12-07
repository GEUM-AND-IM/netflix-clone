import axios from "axios";
import { API_KEY, BASE_PATH } from "../config/config.json";

export interface ITvPros {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export const getTvPros = async (page: number = 1) => {
  const url = `${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=ko&page=${page}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    const res = error;
    return res;
  }
};
