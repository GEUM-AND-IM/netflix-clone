import { atom } from "recoil";

export const searchClick = atom<boolean>({
  key: "SearchClick",
  default: false,
});
