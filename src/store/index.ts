import { configureStore } from '@reduxjs/toolkit';
// import countersSlice from './slices/counters/focusCounter';
// import shortBreakCounterSlice from './slices/counters/shortBreakCounter';
// import longBreakCounterSlice from './slices/counters/longBreakCounter';
// import counterStateSlice from './slices/state';
import { jsonplaceholderApi } from './jsonplaceholder/jsonplaceholder';

export const store = configureStore({
  reducer: {
    // focusCounter: countersSlice,
    // shortBreakCounter: shortBreakCounterSlice,
    // longBreakCounter: longBreakCounterSlice,
    // state: counterStateSlice,
    [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(jsonplaceholderApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;