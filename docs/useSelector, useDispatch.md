Взаимодействие с данными происходит через хуки `useSelector` и `useDispatch`. 
* `useSelector` используется для получения текущего состояния
* `useDispatch` используется для действий с текущим состоянием

```tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';
import { RootState, AppDispatch } from './store';

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
	  <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

В примере выше мы получаем текущий `state` и сохраняем его в переменной `count`

Для действий со `state` мы используем `useDispatch`

Оба хука мы типизируем:

- **useSelector**: Мы указываем `RootState` в качестве типа состояния, чтобы TypeScript знал, как выглядит структура `state`.
- **useDispatch**: Мы используем `AppDispatch`, чтобы TypeScript понял, что мы работаем с диспетчером Redux, и проверил типы действий, которые мы отправляем.

Эти два типа мы определяем и экспортируем из `store`
