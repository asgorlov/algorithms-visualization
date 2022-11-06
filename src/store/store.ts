import { configureStore } from "@reduxjs/toolkit";
import controlsReducer from "./controls.slice";
import mainPageReducer from "./main-page.slice";

export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
    controls: controlsReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
