import React from "react";
import { FC } from "react";
import * as styles from "./CstmButton.module.css"

interface CstmButtonProps {
    onClick: () => void;
    color: "white" | "black";
    children: React.ReactNode;
}

export const CstmButton: FC<CstmButtonProps> = ({onClick, color, children}) => {
    let btnClass = color === "white" ? `${styles.cstmButtonWhite + ' ' + styles.cstmButton}` : styles.cstmButton

    return (
        <button onClick={onClick} className={btnClass}>{children}</button>
    )
}