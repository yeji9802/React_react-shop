import { atom } from "recoil";

// 모달 창
export const modalState = atom({
  key: "modalState", // unique ID
  default: false, // default value
});

// Product
export const cartState = atom({
  key: "cartState",
  default: [],
});
