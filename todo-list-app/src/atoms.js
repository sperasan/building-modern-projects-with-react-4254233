import { atom } from "recoil";

export const todos = atom({
  key: "todos",
  default: [{ name: "Talk About Recoil", isCompleted: false }],
});
