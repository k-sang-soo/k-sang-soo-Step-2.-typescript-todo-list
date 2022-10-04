import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  const { register, watch } = useForm();
  console.log(watch()); // form에 입력 값을 보여줌
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("First Name")} placeholder="First Name" />
        <input {...register("Last Name")} placeholder="Last Name" />
        <input {...register("Username")} placeholder="Username" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("PasswordConfirm")} placeholder="PasswordConfirm" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
