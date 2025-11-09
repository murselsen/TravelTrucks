import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice.js";
const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export default store;
