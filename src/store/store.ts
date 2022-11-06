import { configureStore } from "@reduxjs/toolkit";
import algorithmView from "./algorithm-view.slice";
import controlsReducer from "./controls.slice";
import mainPageReducer from "./main-page.slice";

export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
    controls: controlsReducer,
    algorithmView: algorithmView
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
