import React from "react";
import styles from "./customFiled.module.css";

const Field = (props) => {
  const {
    input,
    label,
    meta: { error, touched },
    type,
  } = props;

  const render = () => {
    if (type === "select") {
      return (
        <div>
          <label className={styles.inputLabel}>{label}</label>
          <div className="ErrorShowing">{touched && error}</div>
        </div>
      );
    } else {
      return (
        <div>
          <label className={styles.inputLabel}>{label}</label>
          <input
            type={type}
            className={styles.inputField}
            {...input}
            autoComplete="none"
          />
          <div className={styles.ErrorShowing}>{touched && error}</div>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
};

export default Field;
