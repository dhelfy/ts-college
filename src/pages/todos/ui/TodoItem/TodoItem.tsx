import React from "react";
import { FC } from "react";
import * as styles from "./TodoItem.module.css"
import { useDispatch } from "react-redux";
import { TodoActions } from "../../../../state/slices/todoSlice";
import { ITodo } from "../../../../types/types";

interface TodoItemProps {
    title: string;
    completed: boolean;
    key: number;
    todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({title, completed, todo}) => {
    const dispatch = useDispatch()

    let onCompleteHandler = () => dispatch(TodoActions.completeTodo(todo))

    return (
        <div className={styles.todoItem}>
            {title}
            <input type="checkbox" checked={completed} onChange={onCompleteHandler}/>
        </div>
    )
}