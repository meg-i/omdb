import moviesReducer from "./moviesReducer";
import closeDisplayReducer from "./closeDisplayReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  movies: moviesReducer,
  isClosed: closeDisplayReducer,
});

export default allReducers;
