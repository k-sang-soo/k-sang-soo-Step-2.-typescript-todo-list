import { atom } from "recoil";

export interface IToDoData {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDoData[]>({
  key: "toDo",
  default: [],
});
