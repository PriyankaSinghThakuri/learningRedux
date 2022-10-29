//REDUCER
const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "DIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
