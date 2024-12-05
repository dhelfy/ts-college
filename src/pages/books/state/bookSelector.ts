import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../../state/store"

const root = (state: RootState) => state.bookReducer

export const selectInputValue = createSelector(root, (data) => data.inputs)
export const selectAllBooks = createSelector(root, (data) => data.books)