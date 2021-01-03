const students = (state = null, action) => {
  switch (action.type) {
    case "students":
      return action.payload;
    default:
      return state;
  }
};

export default students;
