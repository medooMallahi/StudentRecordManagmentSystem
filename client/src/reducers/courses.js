const courses = (state = null, action) => {
  switch (action.type) {
    case "studentCourses":
      return action.payload;
    default:
      return state;
  }
};

export default courses;
