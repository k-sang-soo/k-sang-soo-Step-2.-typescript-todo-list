import React from "react";
import { Categories, IToDoData, toDoState, toDoStorage } from "../atoms";
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
        toDo.id === id ? { ...toDo, category: name as any } : toDo
      );
    });
  };

  const DeleteToDo = () => {
    setToDos((oldToDos) => {
      const result = oldToDos.filter((toDo) => toDo.id !== id);
      localStorage.setItem(toDoStorage.TODOS_STORAGE, JSON.stringify(result));
      return result;
    });
  };

  return (
    <li style={{ marginTop: "8px" }}>
      <span style={{ marginRight: "8px" }}>{text}</span>

      {category !== Categories.TO_DO && (
        <button
          name={Categories.TO_DO}
          onClick={onClick}
          style={{
            marginRight: "8px",
            padding: "4px",
            border: "1px solid #FFF",
            borderRadius: "4px",
          }}
        >
          TO_DO
        </button>
      )}
      {category !== Categories.DOING && (
        <button
          name={Categories.DOING}
          onClick={onClick}
          style={{
            marginRight: "8px",
            padding: "4px",
            border: "1px solid #FFF",
            borderRadius: "4px",
          }}
        >
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button
          name={Categories.DONE}
          onClick={onClick}
          style={{
            marginRight: "8px",
            padding: "4px",
            border: "1px solid #FFF",
            borderRadius: "4px",
          }}
        >
          Done
        </button>
      )}
      <button
        onClick={DeleteToDo}
        style={{
          marginRight: "8px",
          padding: "4px",
          border: "1px solid #FFF",
          borderRadius: "4px",
        }}
      >
        Delete
      </button>
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
