const myStudebt = (state = null, action) => {
  switch (action.type) {
    case "myStudent":
      return action.payload;
    default:
      return state;
  }
};

export default myStudebt;
