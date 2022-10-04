import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFormData {
    Email: string;
    FirstName: string;
    LastName: string;
    Username: string;
    Password: string;
    PasswordConfirm: string;
    extraError?: string;
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
        setError,
    } = useForm<IFormData>({
        defaultValues: {
            Email: '@naver.com',
        },
    });

    const onValid = (data: IFormData) => {
        console.log(setError);

        if (data.Password !== data.PasswordConfirm) {
            //shouldFocus 오류 발생 시 해당 위치로 이동
            setError('PasswordConfirm', { message: '패스워드가 일치하지 않습니다.' }, { shouldFocus: true });
        }

        // if(state === '404') {
        //   setError('extraError', { message: '서버 상태가 원할하지 않습니다.' });
        // }
    };
    console.log(errors);
    // console.log(watch()); form에 입력 값을 보여줌
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)} style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                    {...register('Email', {
                        required: '필수 입력 값',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                            message: '네이버 메일만 허용 됩니다.',
                        },
                    })}
                    placeholder="Email"
                />
                <span>{errors?.Email?.message}</span>
                <input
                    {...register('FirstName', {
                        required: '필수 입력 값',
                        validate: {
                            noNico: (value) => (value.includes('nico') ? 'nico 금지된 단어 입니다.' : true),
                            noNick: (value) => (value.includes('nick') ? 'nick 금지된 단어 입니다.' : true),
                        },
                    })}
                    placeholder="First Name"
                />
                <span>{errors?.FirstName?.message}</span>
                <input {...register('LastName', { required: '필수 입력 값' })} placeholder="Last Name" />
                <span>{errors?.LastName?.message}</span>
                <input {...register('Username', { required: '필수 입력 값' })} placeholder="Username" />
                <span>{errors?.Username?.message}</span>
                <input
                    {...register('Password', {
                        required: '필수 입력 값',
                        minLength: { value: 5, message: '패스워드 길이가 짧습니다.' },
                    })}
                    placeholder="Password"
                />
                <span>{errors?.Password?.message}</span>
                <input
                    {...register('PasswordConfirm', {
                        required: '필수 입력 값',
                        minLength: { value: 5, message: '패스워드 길이가 짧습니다.' },
                    })}
                    placeholder="PasswordConfirm"
                />
                <span>{errors?.PasswordConfirm?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}

export default ToDoList;
