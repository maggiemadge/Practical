import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import testReducer from "./Store/testReducer";
import testReducer2 from "./Store/testReducer2";
import { Provider } from "react-redux";
import App from "./App";

import { watchAll } from "./Store/testSaga";

const rootReducer = combineReducers({
  testReducer: testReducer,
  testReducer2: testReducer2
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAll);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </Provider>,
  rootElement
);
