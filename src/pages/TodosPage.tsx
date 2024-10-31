import React from "react"
import { FC } from "react"
import { useSelector } from "react-redux"
import { selectAllTodos } from "../state/selectors/todoSelector"

export const TodosPage: FC = () => {
    const todos = useSelector(selectAllTodos)

    const todoElems = todos.map((todo) => {
        return (
            <div key={todo.id}>
                {todo.title}
                <input type="checkbox" checked={todo.isDone}/>
            </div>
        )
    })

    return (
        <>
            {todoElems}
        </>
    )
}