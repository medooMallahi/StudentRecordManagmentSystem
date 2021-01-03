import React, { Component } from "react";
import Navigator from "../../HOC/navigator";
import Particles from "react-particles-js";
import { reduxForm, Field } from "redux-form";
import CustomField from "../Fields/customField";
import Dropzone from "react-dropzone";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import styles from "./editProfile.module.css";

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

class EditProfile extends Component {
  state = {
    image: null,
  };

  formSubmition = (values) => {
    const { name, email, password } = values;
    const image = this.state.image;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    this.props.signUp(formData);
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
                label="Name"
                type="text"
                name="name"
                component={CustomField}
              />

              <Field
                label="Email"
                type="email"
                name="email"
                component={CustomField}
              />
              <Field
                label="password"
                type="password"
                name="password"
                component={CustomField}
              />
              <Dropzone
                onDrop={(acceptedFiles) =>
                  this.setState({ image: acceptedFiles[0] })
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Click here to add a photo</p>
                    </div>
                  </section>
                )}
              </Dropzone>

              <button type="submit" className={styles.submitButton}>
                Send
              </button>
            </form>
          </div>
        </div>
      </Navigator>
    );
  }
}

const Editprofile = compose(
  reduxForm({ form: "Profile" }),
  connect(null, actions)
)(EditProfile);

export default Editprofile;
