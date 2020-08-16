import React, { useEffect, useState } from "react";
import Movie from "./movie";
import Pagination from "./pagination";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDetail from "./moviedetail";
import { Empty } from "antd";

const Movies = () => {
  const API_KEY = "c6e40a9f";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Pokemon");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      const data = await response.json();
      console.log(data);
      data.Response == "True" ? setMovies(data.Search) : setMovies(null);
    };
    getMovies();
  }, [query]);

  const getCurrentMovies = () => {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    movies.sort((a, b) => a.Year - b.Year);
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    return currentMovies;
  };

  //Paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const handleDisplay = (movieId) => {
    console.log("Event Handler Called", movieId);
    fetch(`http://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        setDetailRequest(false);
        setShowDetail(response);
        setCurrentMovie(response);
        console.log(currentMovie);
      })
      .catch(({ message }) => {
        setDetailRequest(false);
      });
  };

  const closeDisplay = () => {
    setCurrentMovie(null);
  };

  return (
    <React.Fragment>
      {currentMovie == null ? (
        <div>
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>

          {movies.Response == "True" ? (
            <Empty />
          ) : (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Released date</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentMovies().map((movie, index) => (
                    <Movie key={index} movie={movie} display={handleDisplay} />
                  ))}
                </tbody>
              </Table>
              <Pagination
                moviesPerPage={moviesPerPage}
                totalMovies={movies.length}
                paginate={paginate}
              />
            </div>
          )}
        </div>
      ) : (
        <MovieDetail
          handleDisplay={handleDisplay}
          closeDisplay={closeDisplay}
          currentMovie={currentMovie}
        />
      )}
    </React.Fragment>
  );
};

export default Movies;
