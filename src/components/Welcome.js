import React from "react";
import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <h1>New User</h1>
      </Route>
    </div>
  );
}
