import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  userReducer,
  postReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
