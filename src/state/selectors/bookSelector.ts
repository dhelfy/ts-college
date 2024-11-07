import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

const root = (state: RootState) => state.bookReducer
// сделал так, потому что если сделать через createSelector, то в консоли Redux ругается
// и говорит что финальное значение createSelector не модифицируется, что может приводить
// к ненужной мемоизации и лишним ререндерам
export const inputValueSelector = (state: RootState) => state.bookReducer.inputs

export const selectAllBooks = createSelector(root, (data) => {return data.books})