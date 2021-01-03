export default (state = false, action) => {
  switch (action.type) {
    case "signIn":
      return action.payload || false;
    default:
      return state;
  }
};
