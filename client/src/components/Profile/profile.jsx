import React, { Component } from "react";
import Navigator from "../../HOC/navigator";
import { connect } from "react-redux";
import * as actions from "../../actions";
import styles from "./profile.module.css";
import { Button } from "@material-ui/core";

class Profile extends Component {
  renderProfile() {
    if (this.props.mystudent === null) {
      return <h1>No Profile</h1>;
    } else {
      return (
        <div className={styles.container}>
          <div>
            <img
              className={styles.image}
              src={`/${this.props.mystudent.student.imageUrl}`}
              alt="Logo"
            />
            <h2>{this.props.mystudent.student.name}</h2>
            <h2>Gpa is {this.props.mystudent.student.gpa} </h2>
            <h2>Paid money is {this.props.mystudent.student.paid}</h2>
            <h2>
              The required installment is {this.props.mystudent.student.ToPaid}
            </h2>
          </div>
          <div>
            <h2>Add Course</h2>
            <Button
              color="secondary"
              onClick={() =>
                this.props.history.push(
                  `/addStudentCourse/${this.props.mystudent.student.studentId}`
                )
              }
            >
              Add Course
            </Button>
          </div>
          <div>
            <h2>View his registered courses</h2>
            <Button
              color="secondary"
              onClick={() =>
                this.props.history.push(
                  `/studentCourses/${this.props.mystudent.student.studentId}`
                )
              }
            >
              View Courses
            </Button>
          </div>
        </div>
      );
    }
  }
  render() {
    const pathName = this.props.location.pathname;
    return <Navigator pathname={pathName}>{this.renderProfile()}</Navigator>;
  }
}

function mapStateToProps(state) {
  return {
    mystudent: state.myStudent,
  };
}

export default connect(mapStateToProps, actions)(Profile);
