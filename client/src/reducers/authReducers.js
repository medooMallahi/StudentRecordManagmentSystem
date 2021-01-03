export default (state = null, action) => {
  switch (action.type) {
    case "fetch_user":
      return action.payload || false;
    case "signUp":
      return action.payload || false;
    default:
      return state;
  }
};
