import React from "react";
import { useState } from "react";
import classes from "./SignUp.module.css";

function SignUp(props) {
  const signUpHandler = () => {
    {
      props.signUp(false);
    }
  };
  return (
    <div className={classes.signup_box}>
      <h1>SIGN UP</h1>
      <form action="">
        <div className={classes.form_group}>
          <input
            type="text"
            className={classes.name}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={classes.form_group}>
          <input
            type="email"
            className={classes.email}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={classes.form_group}>
          <input
            type="password"
            className={classes.password}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className={classes.form_group}>
          <input
            type="password"
            className={classes.password}
            placeholder="Re-enter your password"
            required
          />
        </div>
        <div class="submit">
          <button onClick={signUpHandler}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
