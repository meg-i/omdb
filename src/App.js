import React from "react";
import Movies from "./components/movies";
import { useDispatch } from "react-redux";
// import { getMovieList } from "./actions";
import "./App.scss";

export default function App() {
  // const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Movies />
      {/* <button onClick={() => dispatch(getMovieList())}> Get Movies </button> */}
    </React.Fragment>
  );
}
