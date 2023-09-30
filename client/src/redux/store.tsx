import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducers } from "./reducers/todoReducer";

const reducers = combineReducers({
  todos: todoReducers
});

const middleware = [thunk];

const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store