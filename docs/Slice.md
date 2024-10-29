Slice в Redux это что-то вроде небольшой части глобального состояния, которая отвечает за определённую логику, например, за счётчик.

Слайс создается следующим образом:

```ts
const someSlice = createSlice({
	name: 'sliceName',
	initialState: {
		value: 0;
	},
	reducers: {
		increase: (state) => {
			state.value += 1
		}
	}
})
```

У слайса есть три обязательных поля, `name`, `initialState` и `reducers`. Все они названы так, что семантически понятно, что и для чего нужно.

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

Из слайса всегда по дефолту экспортируется `reducer` и все `actions`. 

В примере выше сначала создается интерфейс для типизации состояния, затем создается объект состояния, который совпадает с интерфейсом. Также мы импортировали и используем `PayloadAction` из `@reduxjs/toolkit`, чтобы типизировать `action`. Это особенно полезно для экшенов с параметрами (например, `incrementByAmount`), где `PayloadAction<number>` указывает, что `payload` должен быть числом.

Теперь когда наш слайс создан, мы должны указать его в `store`:

```ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const store = configureStore({
  reducer: {
	  counter: counterReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
```