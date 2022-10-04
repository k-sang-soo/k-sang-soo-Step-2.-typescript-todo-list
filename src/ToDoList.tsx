import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormData {
  Email: string;
  FirstName: string;
  LastName: string;
  Username: string;
  Password: string;
  PasswordConfirm: string;
}

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     } else {
//       console.log("submit");
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onValid = (data: any) => {
    console.log("handleSubmit", data);
  };
  console.log(errors);
  // console.log(watch()); form에 입력 값을 보여줌
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Email", {
            required: "필수 입력 값",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "네이버 메일만 허용 됩니다.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", { required: "필수 입력 값" })}
          placeholder="First Name"
        />
        <input
          {...register("LastName", { required: "필수 입력 값" })}
          placeholder="Last Name"
        />
        <input
          {...register("Username", { required: "필수 입력 값" })}
          placeholder="Username"
        />
        <input
          {...register("Password", {
            required: "필수 입력 값",
            minLength: { value: 5, message: "패스워드 길이가 짧습니다." },
          })}
          placeholder="Password"
        />
        <input
          {...register("PasswordConfirm", {
            required: "필수 입력 값",
            minLength: { value: 5, message: "패스워드 길이가 짧습니다." },
          })}
          placeholder="PasswordConfirm"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
