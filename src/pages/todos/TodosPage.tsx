import React from "react"
import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllTodos } from "../../state/selectors/todoSelector"
import { fetchTodos } from "../../state/slices/todoSlice"
import { TodoItem } from "./ui/TodoItem/TodoItem"

export const TodosPage: FC = () => {
    const todos = useSelector(selectAllTodos)
    const dispatch = useDispatch()

    // saga update
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    // вытощить в UI компонент
    const todoElems = todos.map((todo) => {
        return (
            <TodoItem title={todo.title} key={todo.id} completed={todo.completed} />
        )
    })



    return (
        <>
            {todoElems}
        </>
    )
}