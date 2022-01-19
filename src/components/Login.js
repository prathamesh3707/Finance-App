import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

function Login(props) {
  const loginHandler = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let enteredEmail = document.getElementById("mail").value;
    let passLength = document.getElementById("password").value.length;
    if (passLength < 5) {
      alert("Password should be at least 5 characters");
    }
    if (emailRegex.test(enteredEmail)) {
      {
        props.login(false);
      }
    } else {
      setError(true);
    }
  };

  const signUpHandler = () => {
    {
      props.signUp(true);
    }
    {
      props.login(false);
    }
  };

  const [error, setError] = useState(false);

  return (
    <div className={classes.loginbox}>
      <div className={classes.flex_item0}>
        <h1>LOGIN HERE</h1>
      </div>
      <div classname={classes.flex_item0}>
        <form>
          <div className={classes.flex_item1}>
            <label>Username</label>
            <input type="text" name="" placeholder="Enter Username" />
          </div>
          <div className={classes.flex_item1}>
            <label>Email</label>
            <input
              type="email"
              id="mail"
              name=""
              placeholder="Enter Email ID"
            />
          </div>
          <div className={classes.flex_item1}>
            <label>Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter Password"
            />
          </div>
          {error && <p className={classes.error}>Please enter valid data</p>}
          <div className={`${classes.flex_item1} ${classes.submitbutton}`}>
            <button className={classes.submit} onClick={loginHandler}>
              Login
            </button>
          </div>
          <div className={classes.flex_item1}>
            <div className={`${classes.link} ${classes.footer}`}>
              {/* <a href="#">Forgot Password</a>&emsp;&emsp;&emsp; */}
              <button onClick={signUpHandler} className={classes.signUp}>
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
