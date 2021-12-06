import axios from "axios";
import { API_KEY, BASE_PATH } from "../config/config.json";

export interface IKnownFor {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
}

export interface ISearch {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  known_for?: IKnownFor[];
  original_name: string;
}

export interface IGetSearchResult {
  page: number;
  results: ISearch[];
}

export const getSearch = async (query: string | null) => {
  const url = `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=ko&query=${query}&page=1&include_adult=false`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    const res = error;
    return res;
  }
};
