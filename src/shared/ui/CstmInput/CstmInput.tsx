import { FC, useState } from "react"
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { setInputValue } from "../../../pages/books/state/bookSlice";
import { selectInputValue } from "../../../pages/books/state/bookSelector";
import * as styles from "./CstmInput.module.css"

interface CstmInputProps {
    placeholder?: string;
    name: string;
}

export const CstmInput: FC<CstmInputProps> = ({placeholder, name}) => {
    const inputValue = useSelector(selectInputValue)
    const dispatch: AppDispatch = useDispatch()

    function onChangeFunction(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setInputValue({name: name, value: e.currentTarget.value}))
    }

    return (
        <input 
         value={inputValue[name]}
         onChange={onChangeFunction}
         placeholder={placeholder}
         className={styles.cstmInput}
        />
    )
}