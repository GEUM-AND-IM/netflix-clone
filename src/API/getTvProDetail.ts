import axios from "axios";
import { API_KEY, BASE_PATH } from "../config/config.json";

interface ITvCreatedBy {
  id: number;
  name: string;
  profile_path: string;
}

interface ITvGenres {
  id: number;
  name: string;
}

interface ITvLastEpisode {
  air_date: string;
  episode_number: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  still_path: string;
  season_number: number;
}

export interface ITvProDeatil {
  backdrop_path: string;
  created_by: ITvCreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: ITvGenres[];
  id: number;
  languages: string[];
  name: string;
  last_episode_to_air: ITvLastEpisode;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export const getTvProDetail = async (id: string) => {
  const url = `${BASE_PATH}/tv/${id}?api_key=${API_KEY}&language=ko`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    const res = error;
    return res;
  }
};
