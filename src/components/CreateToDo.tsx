import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IFormToDo {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IFormToDo>();
  const onSubmit = ({ toDo }: IFormToDo) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ padding: "4px", color: "#000" }}
          {...register("toDo", {
            required: "텍스트를 적어주세요.",
          })}
          placeholder="오늘 할 일을 적어보세요."
        />
        <button
          style={{
            display: "block",
            width: "200px",
            height: "40px",
            marginTop: "16px",
            border: "1px solid #FFF",
          }}
        >
          추가
        </button>
      </form>
    </>
  );
}

export default CreateToDo;
