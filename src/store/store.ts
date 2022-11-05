import { configureStore } from "@reduxjs/toolkit";
import algorithmViewReducer from "./algorithm-view.slice";
import mainPageReducer from "./main-page.slice";

export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
    algorithmView: algorithmViewReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
