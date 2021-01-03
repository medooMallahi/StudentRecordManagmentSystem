import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./navigator.css";

const Navigator = (props) => {
  const Springprops = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });

  const inserNav = () => {
    const pathname = props.pathname;
    const links = [
      { link: "Students", linkeTo: "/students" },
      { link: "New Student", linkeTo: "/edit_profile" },
    ];

    if (pathname === "/sign_up" || pathname === "/log_in") {
      return null;
    } else {
      return (
        <div className="menuContainer">
          {links.map((link) => {
            return (
              <Link className="item" key={link.link} to={link.linkeTo}>
                <animated.div className="itemsDev" style={Springprops}>
                  {link.link}
                </animated.div>
              </Link>
            );
          })}
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <AppBar className="Header" color="transparent" position="sticky">
        <div className="Headercontainer">
          <div className="leftSide">
            <Link className="LogoLink" to="/">
              University
            </Link>
            <div className="navigations">{inserNav()}</div>
          </div>
        </div>
      </AppBar>
      {props.children}
    </React.Fragment>
  );
};

export default Navigator;
