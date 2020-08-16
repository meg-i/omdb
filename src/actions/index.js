export const getMovieList = (query) => {
  return {
    type: "GET_MOVIES",
    payload: query,
  };
};

export const closeDetail = () => {
  return {
    type: "CLOSE_DISPLAY",
  };
};
