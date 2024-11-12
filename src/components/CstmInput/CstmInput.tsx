import { FC, useState } from "react"
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { setInputValue } from "../../state/slices/bookSlice";
import { selectInputValue } from "../../state/selectors/bookSelector";
import * as styles from "./CstmInput.module.css"

interface CstmInputProps {
    placeholder?: string;
    name: string;
}

export const CstmInput: FC<CstmInputProps> = ({placeholder, name}) => {
    // useSelector вынес в селекторы
    // теперь сюда импортируем inputValueSelector и вызываем в useSelector
    const inputValue = useSelector(selectInputValue)
    const dispatch: AppDispatch = useDispatch()

    // вынес onChange в функцию
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