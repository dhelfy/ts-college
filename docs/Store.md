Создаем Store, это будет нашим центральным хранилищем

```ts
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
```

В примере выше мы создаем `store` и в нем создаем пустой `reducer`. Также мы экспортируем два типа `RootState` и `AppDispatch`. Эти типы пригодятся в будущем для типизации `useSelector` и `useDispatch`

Когда `store` создан нужно подключить его к приложению, для этого мы оборачиваем все приложение в компонент `Provider` с пропсом `store`, значением которого будет `store` который мы экспортируем из нашего стора

```tsx
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```
