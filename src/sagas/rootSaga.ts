import { all } from "redux-saga/effects";
import todoSaga from "../pages/todos/saga/todoSaga";

export default function* rootSaga() {
    yield all([
        todoSaga(), 
    ]);
}
