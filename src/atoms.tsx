import { atom, selector } from 'recoil';
import { log } from 'util';

export enum toDoStorage {
    'TODOS_STORAGE' = 'TODOS_STORAGE',
}

const Storages = JSON.parse(localStorage.getItem(toDoStorage.TODOS_STORAGE) as any);

//enum을 사용하면 실수를 줄 일수 있다.
//enum 의 가르키는 초기 값은 숫자다
// ex) Categories.To_DO === 0
// 아래처럼 name을 지정해 줄 수 있음.
export enum Categories {
    'TO_DO' = 'TO_DO',
    'DOING' = 'DOING',
    'DONE' = 'DONE',
}

export interface IToDoData {
    id: number;
    text: string;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: 'category',
    default: Categories.TO_DO,
});

export const toDoState = atom<IToDoData[]>({
    key: 'toDo',
    default: Storages ? Storages : [],
});

export const minutesState = atom({
    key: 'minutes',
    default: 0,
});

export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});

export const hourSelector = selector({
    key: 'hours',
    get: ({ get }) => {
        const minutes = get(minutesState);
        return minutes / 60;
    },
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minutesState, minutes);
    },
});
