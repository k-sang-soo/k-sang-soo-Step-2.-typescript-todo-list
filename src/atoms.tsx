import { atom, selector } from 'recoil';

export enum toDoStorage {
    'TODOS_STORAGE' = 'TODOS_STORAGE',
}

const Storages = JSON.parse(localStorage.getItem(toDoStorage.TODOS_STORAGE) as any);

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

export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
