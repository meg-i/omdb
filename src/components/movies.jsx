import React, { useEffect, useState } from "react";
import Movie from "./movie";
import Pagination from "./pagination";
import { Table, Navbar, Form, FormControl, Button } from "react-bootstrap";
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
    const getMovies = () => {
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        .then((resp) => resp)
        .then((resp) => resp.json())
        .then((response) => {
          console.log(response);
          response.Response === "True"
            ? setMovies(response.Search)
            : setMovies(null);
        });
    };
    getMovies();
  }, [query]);

  const getCurrentMovies = () => {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    movies.sort(function (a, b) {
      return a["Year"].localeCompare(b["Year"]);
    });
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
        console.log(response);
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
          <Navbar
            bg="light"
            className="navbar navbar-light bg-light justify-content-between"
          >
            <Navbar.Brand>
              <i className="fas fa-film"></i>
            </Navbar.Brand>
            <Form
              inline
              onSubmit={getSearch}
              onChange={updateSearch}
              value={search}
            >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar>
          {movies == null ? (
            <Empty />
          ) : (
            <div
              className="moviesList"
              style={{
                paddingTop: 50,
              }}
            >
              <main className="container">
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
                      <Movie
                        key={index}
                        movie={movie}
                        display={handleDisplay}
                      />
                    ))}
                  </tbody>
                </Table>
              </main>
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
