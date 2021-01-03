import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducers from "./authReducers";
import loginReducer from "./logInReducer";
import auth from "./auth";
import students from "./students";
import myStudent from "./myStudent";
import courses from "./courses";

export default combineReducers({
  signUp: authReducers,
  user: auth,
  form: reduxForm,
  login: loginReducer,
  students,
  myStudent,
  courses,
});
