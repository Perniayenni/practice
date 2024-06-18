import rootReducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'Practice'
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  }
});

export default store;