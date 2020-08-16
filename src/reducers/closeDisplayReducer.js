const closeDisplayReducer = (state = null, action) => {
  switch (action.type) {
    case "CLOSE_DISPLAY":
      state = null;
    default:
      // need this for default case
      return state;
  }
};

export default closeDisplayReducer;
