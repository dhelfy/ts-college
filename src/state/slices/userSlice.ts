import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";

interface IUserState {
    value: IUser[]
}

const initialState: IUserState = {
    value: [
        {
            name: 'Ivan Ivanov', 
            bdate: '14.08.1990', 
            id: 1, 
            address: {country: 'Russia', city: 'St. Petersbourg'}
        },
        {
            name: 'Andrey Petrov', 
            bdate: '20.09.2000', 
            id: 2, 
            address: {country: 'Russia', city: 'Moscow'}
        }
    ]
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer
export const {} = userSlice.actions