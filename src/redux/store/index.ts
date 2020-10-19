import { createStore } from "redux";
import rootReducer from "../reducers";
// import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../saga/index";
// const SagaMiddleWare = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["mode"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  // composeWithDevTools(applyMiddleware(ReduxThunk)),
  composeWithDevTools()
);
// SagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
