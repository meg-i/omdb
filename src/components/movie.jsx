import React from "react";

const Movie = ({ display, movie }) => {
  return (
    <tr onClick={() => display(movie.imdbID)} style={{ cursor: "pointer" }}>
      <td>{movie.imdbID}</td>
      <td>{movie.Title}</td>
      <td>{movie.Year}</td>
      <td>{movie.Type}</td>
    </tr>
  );
};

export default Movie;
