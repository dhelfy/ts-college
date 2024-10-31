Reselect - это библиотека, которая является зависимостью Redux Toolkit.

В библиотеке есть функция `createSelector`, которая принимает в качестве параметров две вещи:
- Набор селекторов
- Функцию преобразователь

Функция преобразователь в свою очередь также принимает параметры, их количество зависит от количества переданных селекторов в `createSelector`. Параметры можно назвать как угодно, определенного соглашения тут нет. В качестве каждого параметра будет подставлено значения результата вызова соответствующего селектора.

## Как это работает

Мы пишем функции селекторы, которые вытягивают из стора нужные нам данные

Затем мы создаем селектор через `createSelector`, в который передаем наши функции селекторы и функцию преобразователь. В теле функции преобразователя пишем логику того, что нужно сделать с данными.

Когда все готово, то экспортируем селектор и используем его в нужном месте, передавая в `useSelector`

**Пример кода:**

```ts
// Импортируем все зависимости
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Создаем функцию селектор, которая будет доставать текущее состояние Todo'шек
const root = (state: RootState) => state.todoReducer

// Создаем селектор через createSelector, куда передаем фукнцию селектор и просто 
// возвращаем значение текущего состояния Todo'шек
export const selectAllTodos = createSelector(root, (root) => root.value)
```

```tsx
// Импортируем все зависимости
import React from "react"
import { FC } from "react"
import { useSelector } from "react-redux"
import { selectAllTodos } from "../state/selectors/todoSelector"

export const TodosPage: FC = () => {
	// используем селектор в useSelector и получаем данные из state
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
```

Более подробно здесь
https://github.com/reduxjs/reselect