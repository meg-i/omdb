import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

const NavBar = (props) => {
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Navbar className="navbar navbar-dark bg-dark justify-content-between">
      <Navbar.Brand>
        <i class="fas fa-film"></i>
      </Navbar.Brand>
      <Form inline onSubmit={getSearch} onChange={updateSearch} value={search}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
