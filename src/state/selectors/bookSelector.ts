import { RootState } from "../store"

export let bookSelector = (state: RootState) => state.bookReducer.books