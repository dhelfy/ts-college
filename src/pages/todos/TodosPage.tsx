import React from "react"
import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllTodos } from "../../state/selectors/todoSelector"
import { TodoActions } from "../../state/slices/todoSlice"
import { TodoItem } from "./ui/TodoItem/TodoItem"
import { ListComponent } from "../../shared/ui/ListComponent/ListComponent"
import { ITodo } from "../../types/types"

export const TodosPage: FC = () => {
    const todos: ITodo[] = useSelector(selectAllTodos)
    const dispatch = useDispatch()

    // saga update
    useEffect(() => {
        dispatch(TodoActions.fetchTodos())
    }, [dispatch])

    return (
        <>
            <ListComponent 
                items={todos} 
                renderItem={(todo) => <TodoItem title={todo.title} key={todo.id} completed={todo.completed} todo={todo}/>} 
            />
        </>
    )
}