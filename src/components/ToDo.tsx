import React from "react";
import { IToDoData, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import { log } from "util";

function ToDo({ text, category, id }: IToDoData) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      console.log("oldToDos", oldToDos);
      return oldToDos.map((toDo) =>
        toDo.id === id
          ? { ...toDo, category: name as IToDoData["category"] }
          : toDo
      );
    });
  };
  return (
    <li>
      <span>{text}</span>

      {category !== "DOING" && (
        <button name={"DOING"} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name={"TO_DO"} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name={"DONE"} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

// click event 에서 새 인자를 받는 다른 방법
// function ToDo({ text, category }: IToDoData) {
//   const onClick = (newCategory: IToDoData["category"]) => {
//     console.log("i wanna to", newCategory);
//   };
//   return (
//       <li>
//         <span>{text}</span>
//
//         {category !== "DOING" && (
//             <button onClick={() => onClick("DOING")}>Doing</button>
//         )}
//         {category !== "TO_DO" && (
//             <button onClick={() => onClick("TO_DO")}>To Do</button>
//         )}
//         {category !== "DONE" && (
//             <button onClick={() => onClick("DONE")}>Done</button>
//         )}
//       </li>
//   );
// }

export default ToDo;
