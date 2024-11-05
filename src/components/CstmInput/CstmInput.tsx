import { FC, useState } from "react"
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { setInputValue } from "../../state/slices/bookSlice";

interface CstmInputProps {
    placeholder?: string;
    name: string;
}

export const CstmInput: FC<CstmInputProps> = ({placeholder, name}) => {
    // useSelector вынести в селекторы
    const inputValue = useSelector((state: RootState) => state.bookReducer.inputs[name])
    const dispatch: AppDispatch = useDispatch()

    // вынести onChange в функцию
    return (
        <input 
         value={inputValue}
         onChange={(e) => {dispatch(setInputValue({name: name, value: e.currentTarget.value}))}}
         placeholder={placeholder}
        />
    )
}