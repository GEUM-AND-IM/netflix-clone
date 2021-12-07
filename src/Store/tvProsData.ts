import { atom } from "recoil";
import { ITvPros } from "../API/getTvPros";

export const tvProsData = atom<ITvPros[]>({
  key: "tvProsData",
  default: [],
});
