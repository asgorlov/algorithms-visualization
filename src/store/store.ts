import { configureStore } from "@reduxjs/toolkit";
import algorithmView from "./algorithm-view.slice";
import controlsReducer from "./controls.slice";
import mainPageReducer from "./main-page.slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../utils/root-saga.util";

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      mainPage: mainPageReducer,
      controls: controlsReducer,
      algorithmView: algorithmView
    },
    middleware: [sagaMiddleware]
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
