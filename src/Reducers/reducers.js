import { configureStore } from '@reduxjs/toolkit';

const rootReducer = (action, state = {}) => state;

const store = configureStore({
  reducer: rootReducer
});

export default store;