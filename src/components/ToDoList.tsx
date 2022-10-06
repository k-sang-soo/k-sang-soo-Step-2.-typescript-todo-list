import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import CreateToDo from './CreateToDo';
import { Categories, categoryState, IToDoData, toDoSelector, toDoState } from '../atoms';
import ToDo from './ToDo';

interface IFormData {
    Email: string;
    FirstName: string;
    LastName: string;
    Username: string;
    Password: string;
    PasswordConfirm: string;
    extraError?: string;
}

function ToDoList() {
    // 배열 안의 배열을 선택하려면 이렇게 배열을 열고 순서대로 이름을 지정하면 된다.
    const toDos = useRecoilValue(toDoSelector);
    const allToDos = useRecoilValue(toDoState);
    const [category, setCategory] = useRecoilState(categoryState);
    const allToDosString = JSON.stringify(allToDos);
    const setStroage = window.localStorage.setItem('toDos', allToDosString);
    const getStroage = window.localStorage.getItem('toDos');
    const getStroageObj = getStroage && JSON.parse(getStroage);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setCategory(value as any);
    };

    console.log('toDos', toDos);
    console.log('getStroage', getStroage);
    console.log('getStroageObj', getStroageObj);

    return (
        <div style={{ padding: '24px' }}>
            <h1
                style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #FFF',
                }}
            >
                To Dos
            </h1>
            <CreateToDo />
            <select
                onInput={onInput}
                value={category}
                style={{
                    width: '200px',
                    marginTop: '16px',
                    padding: '4px',
                    border: '1px solid #FFF',
                    backgroundColor: 'transparent',
                    outline: 'none',
                }}
            >
                <option value={Categories.TO_DO} style={{ color: '#000' }}>
                    ToDo ({allToDos.filter((toDo) => toDo.category === Categories.TO_DO).length})
                </option>
                <option value={Categories.DOING} style={{ color: '#000' }}>
                    Doing ({allToDos.filter((toDo) => toDo.category === Categories.DOING).length})
                </option>
                <option value={Categories.DONE} style={{ color: '#000' }}>
                    Done ({allToDos.filter((toDo) => toDo.category === Categories.DONE).length})
                </option>
            </select>
            {toDos.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
}

// 회원 가입 form 예시
// function ToDoList() {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IFormData>({
//     defaultValues: {
//       Email: "@naver.com",
//     },
//   });
//
//   const onValid = (data: IFormData) => {
//     console.log(setError);
//
//     if (data.Password !== data.PasswordConfirm) {
//       //shouldFocus 오류 발생 시 해당 위치로 이동
//       setError(
//         "PasswordConfirm",
//         { message: "패스워드가 일치하지 않습니다." },
//         { shouldFocus: true }
//       );
//     }
//
//     // if(state === '404') {
//     //   setError('extraError', { message: '서버 상태가 원할하지 않습니다.' });
//     // }
//   };
//   console.log(errors);
//   // console.log(watch()); form에 입력 값을 보여줌
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onValid)}
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <input
//           {...register("Email", {
//             required: "필수 입력 값",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
//               message: "네이버 메일만 허용 됩니다.",
//             },
//           })}
//           placeholder="Email"
//         />
//         {errors.Email && <span>{errors.Email.message}</span>}
//         <input
//           {...register("FirstName", {
//             required: "필수 입력 값",
//             validate: {
//               noNico: (value) =>
//                 value.includes("nico") ? "nico 금지된 단어 입니다." : true,
//               noNick: (value) =>
//                 value.includes("nick") ? "nick 금지된 단어 입니다." : true,
//             },
//           })}
//           placeholder="First Name"
//         />
//         <span>{errors?.FirstName?.message}</span>
//         <input
//           {...register("LastName", { required: "필수 입력 값" })}
//           placeholder="Last Name"
//         />
//         <span>{errors?.LastName?.message}</span>
//         <input
//           {...register("Username", { required: "필수 입력 값" })}
//           placeholder="Username"
//         />
//         <span>{errors?.Username?.message}</span>
//         <input
//           {...register("Password", {
//             required: "필수 입력 값",
//             minLength: { value: 5, message: "패스워드 길이가 짧습니다." },
//           })}
//           placeholder="Password"
//         />
//         <span>{errors?.Password?.message}</span>
//         <input
//           {...register("PasswordConfirm", {
//             required: "필수 입력 값",
//             minLength: { value: 5, message: "패스워드 길이가 짧습니다." },
//           })}
//           placeholder="PasswordConfirm"
//         />
//         <span>{errors?.PasswordConfirm?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
