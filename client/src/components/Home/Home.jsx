import React, { Component } from "react";
import styles from "./Home.module.css";
import Navigator from "../../HOC/navigator";
import Particles from "react-particles-js";
import { reduxForm, Field } from "redux-form";
import CustomField from "../Fields/customField";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../actions";

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

class Home extends Component {
  formSubmition = (values) => {
    const { studentId } = values;
    let formData = {
      studentId,
    };
    this.props.getMyStudent(formData);
    this.props.history.push("/profile");
  };

  render() {
    const pathName = this.props.location.pathname;
    return (
      <Navigator pathname={pathName}>
        <div className={styles.full_page}>
          <Particles params={particlesOptions} className={styles.particls} />
          <div className={styles.container}>
            <h1>Enter Student Id To Search For</h1>
            <form onSubmit={this.props.handleSubmit(this.formSubmition)}>
              <Field
                label=""
                name="studentId"
                type="text"
                component={CustomField}
              />
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Navigator>
    );
  }
}

const HomeClass = compose(
  reduxForm({ form: "studentId" }),
  connect(null, actions)
)(Home);

export default HomeClass;
