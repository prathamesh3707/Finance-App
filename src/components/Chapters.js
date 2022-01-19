import React from "react";
import { Link } from "react-router-dom";

export default function Chapters() {
  return (
    <section>
      <h1>This is Chapters page</h1>
      <ul>
        <Link to="/chapters/c1">C1</Link>
        <Link to="/chapters/c2">C2</Link>
        <Link to="/chapters/c3">C3</Link>
      </ul>
    </section>
  );
}
