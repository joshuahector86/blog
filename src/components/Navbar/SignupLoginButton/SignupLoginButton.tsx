import React from "react";
import styles from "./SignupLoginButton.module.scss";

const SignupLoginButton = () => (
  <button className={styles.signup_button}>
    <a href="/signUp/SignUp">Sign Up/ Login</a>
  </button>
);

export default SignupLoginButton;
