import { call, put, takeEvery } from "typed-redux-saga"
import { fetchTodosSuccess } from "../state/slices/todoSlice";
import { getAll } from "../API/todoAPI";

function* workFetchTodos(): Generator<unknown, void> {
    const response = yield call(getAll);

    const todos = yield response.json();
    yield put(fetchTodosSuccess(todos))
}


function* todoSaga () {
    yield takeEvery("todos/fetchTodos", workFetchTodos)
}

export default todoSaga