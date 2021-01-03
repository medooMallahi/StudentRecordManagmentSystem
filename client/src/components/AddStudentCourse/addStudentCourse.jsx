import React, { Component } from "react";
import Navigator from "../../HOC/navigator";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import Particles from "react-particles-js";
import CustomField from "../Fields/customField";
import * as actions from "../../actions";
import styles from "./addStudentCourse.module.css";

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 330,
      },
    },
  },
};

class AddStudentCourse extends Component {
  formSubmition = (values) => {
    const { name, grade } = values;
    const studentId = this.props.match.params.studentId;
    let formData = { name, grade, studentId };
    this.props.addCourse(formData);
    this.props.history.push("/");
  };

  render() {
    const pathName = this.props.location.pathname;
    return (
      <Navigator pathname={pathName}>
        <div className={styles.full_page}>
          <Particles params={particlesOptions} className={styles.particls} />
          <div className={styles.container}>
            <form onSubmit={this.props.handleSubmit(this.formSubmition)}>
              <Field
                label="Course Name"
                type="text"
                name="name"
                component={CustomField}
              />
              <Field
                label="Grade"
                type="text"
                name="grade"
                component={CustomField}
              />

              <button type="submit" className={styles.submitButton}>
                Add
              </button>
            </form>
          </div>
        </div>
      </Navigator>
    );
  }
}

const Add_student_course = compose(
  reduxForm({ form: "AddStudentCourse" }),
  connect(null, actions)
)(AddStudentCourse);

export default Add_student_course;
