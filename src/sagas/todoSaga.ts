import { call, put, takeEvery } from "redux-saga/effects"
import { fetchTodosSuccess } from "../state/slices/todoSlice";

function* workFetchTodos(): Generator<unknown, void, Response> {
    const response: Response = yield call(() => fetch('https://jsonplaceholder.typicode.com/todos?_limit=10'));

    const todos = yield response.json();
    yield put(fetchTodosSuccess(todos))
}


function* todoSaga () {
    yield takeEvery("todos/fetchTodos", workFetchTodos)
}

export default todoSaga