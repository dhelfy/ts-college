import { call, put, takeEvery } from "typed-redux-saga"
import { fetchTodosSuccess } from "../state/slices/todoSlice";
import { getAllTodos } from "../API/index";

function* workFetchTodos(): Generator<unknown, void> {
    const response = yield* call(getAllTodos);

    const todos = response.data;
    yield put(fetchTodosSuccess(todos));
}


function* todoSaga () {
    yield takeEvery("todos/fetchTodos", workFetchTodos)
}

export default todoSaga