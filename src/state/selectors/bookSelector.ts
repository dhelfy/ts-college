import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

const root = (state: RootState) => state.bookReducer

export const selectAllBooks = createSelector(root, (data) => {return data.books})