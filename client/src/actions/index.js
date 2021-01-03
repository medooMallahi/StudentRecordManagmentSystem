import axios from "axios";

export const signUp = (formData) => async (dispatch) => {
  const response = await axios.post("/api/users/register", formData);
  dispatch({
    type: "signUp",
    payload: response.data,
  });
};

export const signIn = (formData) => async (dispatch) => {
  const response = await axios.post("/api/users/logIn", formData);
  dispatch({
    type: "signIn",
    payload: response.data,
  });
};

export const addCourse = (formData) => async (dispatch) => {
  console.log(formData);
  const response = await axios.post("/api/addStudentCourse", formData);
};

// export const auth = (token) => async (dispatch) => {
//   const response = await axios.get("http://localhost:7000/api/users/auth", {
//     headers: { Authorization: token },
//   });
//   dispatch({
//     type: "auth",
//     payload: response.data,
//   });
// };

export const getStudents = () => async (dispatch) => {
  const response = await axios.get("/api/students");
  dispatch({
    type: "students",
    payload: response.data,
  });
};

export const getMyStudent = (formData) => async (dispatch) => {
  const response = await axios.post("/api/getStudentInformation", formData);
  dispatch({
    type: "myStudent",
    payload: response.data,
  });
};

export const getCourses = (studentId) => async (dispatch) => {
  const response = await axios.post("/api/getStudentCourses", {
    studentId,
  });
  dispatch({
    type: "studentCourses",
    payload: response.data,
  });
};
