import React from "react";
import { FC } from "react";
import * as styles from "./TodoItem.module.css"

interface TodoItemProps {
    title: string;
    completed: boolean;
    key: number;
}

export const TodoItem: FC<TodoItemProps> = ({title, completed}) => {
    return (
        <div className={styles.todoItem}>
            {title}
            <input type="checkbox" checked={completed}/>
        </div>
    )
}