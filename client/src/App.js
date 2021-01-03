import React, { Component } from "react";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/profile";
import EditProfile from "./components/Profile/EditProfile";
import StudentRecord from "./components/studentsRecord/StudentRecord";
import AddStudentCourse from "./components/AddStudentCourse/addStudentCourse";
import StudentCourses from "./components/StudentCourses/studentCourses";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/studentCourses/:studentId"
          component={StudentCourses}
        />
        <Route
          exact
          path="/addStudentCourse/:studentId"
          component={AddStudentCourse}
        />
        <Route exact path="/edit_profile" component={EditProfile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/students" component={StudentRecord} />
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
