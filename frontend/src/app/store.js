// config for RTK middleware/reducer
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    // api state reducer
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // caching/request
    getDefaultMiddleware().concat(api.middleware),
});
