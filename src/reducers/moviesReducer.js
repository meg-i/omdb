const moviesReducer = (state = {}, action) => {
  const API_KEY = "c6e40a9f";
  const query = "Pokemon";
  switch (action.type) {
    case "GET_MOVIES":
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        .then((resp) => resp)
        .then((resp) => resp.json())
        .then((response) => {
          console.log(response);
          response.Response === "True"
            ? Object.assign(state, response.Search)
            : Object.assign(state, null);
        });
      return state;
    default:
      // need this for default case
      return state;
  }
};

export default moviesReducer;
