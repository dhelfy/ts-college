export interface IBook {
    title: string;
    author: string;
    year: number;
    id: number;
}

interface address {
    country: string,
    city: string
}

export interface IUser {
    name: string,
    bdate: string,
    id: number,
    address: address
}

export interface ITodo {
    title: string,
    isDone: boolean,
    id: number
}