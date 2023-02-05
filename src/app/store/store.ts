import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = compose(middlewareEnhancer);

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers
);

export type DispatchType = typeof store.dispatch;
