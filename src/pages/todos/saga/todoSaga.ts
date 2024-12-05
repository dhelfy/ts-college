import { call, put, takeEvery } from "typed-redux-saga"
import { TodoActions } from "../state/todoSlice";
import { getAllTodos } from "../../../API/index";

function* workFetchTodos(): Generator<unknown, void> {
    const response = yield* call(getAllTodos);

    const todos = response.data;
    yield put(TodoActions.fetchTodosSuccess(todos));
}


function* todoSaga () {
    yield takeEvery(TodoActions.fetchTodos, workFetchTodos)
}

export default todoSaga