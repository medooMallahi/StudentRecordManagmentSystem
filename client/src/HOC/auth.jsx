import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import CircularProgress from "@material-ui/core/CircularProgress";

const Auth = (ChildComponent, reload, adminRoute = null) => {
  class AuthenticationCheck extends Component {
    componentDidMount() {
      const token = localStorage.getItem("w_auth");
      this.props.auth(token);
    }

    componentDidUpdate() {
      const user = this.props.user;

      if (!user) return;

      if (!user.isAuth) {
        if (reload) {
          this.props.history.push("/log_in");
        }
      } else {
        if (adminRoute && !user.isAdmin) {
          this.props.history.push("/user/dashboard");
        } else {
          if (reload === false) {
            this.props.history.push("/user/das");
          }
        }
      }
    }
    render() {
      if (!this.props.user) {
        return (
          <div className="main_loader">
            <CircularProgress style={{ color: "#2196F3" }} thickness={7} />
          </div>
        );
      }

      return <ChildComponent {...this.props} user={this.props.user} />;
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }

  return connect(mapStateToProps, actions)(AuthenticationCheck);
};

export default Auth;
