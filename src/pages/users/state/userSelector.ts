import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../state/store";

const root = (state: RootState) => state.userReducer

export const selectAllUsers = createSelector(root, (data) => data.value)