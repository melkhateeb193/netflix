import { applyMiddleware, createStore } from "redux";
import MainReducers from "../Reducer/Combain";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  MainReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
