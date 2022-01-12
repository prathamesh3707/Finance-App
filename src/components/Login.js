import React from "react";
import classes from "./Login.module.css";

function Login() {
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
            <input type="email" name="" placeholder="Enter Email ID" />
          </div>
          <div className={classes.flex_item1}>
            <label>Password</label>
            <input type="password" name="" placeholder="Enter Password" />
          </div>
          <div className={`${classes.flex_item1} ${classes.submitbutton}`}>
            <button className={classes.submit}>Login</button>
          </div>
          <div className={classes.flex_item1}>
            <div className={`${classes.link} ${classes.footer}`}>
              <a href="#">Forgot Password</a>&emsp;&emsp;&emsp;
              <a href="#">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
