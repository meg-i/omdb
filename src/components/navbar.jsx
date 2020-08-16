import React from "react";

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
    // <Navbar bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">
    //     <i class="fas fa-film">OMDB</i>
    //   </Navbar.Brand>
    //   <Form inline>
    //     <FormControl
    //       type="text"
    //       placeholder="Search"
    //       className="mr-sm-2"
    //       onSubmit={getSearch}
    //       onChange={updateSearch}
    //       value={search}
    //     />
    //     <Button variant="outline-success" type="submit">
    //       Search
    //     </Button>
    //   </Form>
    // </Navbar>
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
  );
};

export default NavBar;
