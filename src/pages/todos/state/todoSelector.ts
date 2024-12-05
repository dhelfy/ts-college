import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../state/store";

const root = (state: RootState) => state.todoReducer

export const selectAllTodos = createSelector(root, (root) => root.todos)