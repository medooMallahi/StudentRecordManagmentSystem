const auth = (state = null, action) => {
  switch (action.type) {
    case "auth":
      return action.payload;
    default:
      return state;
  }
};

export default auth;
