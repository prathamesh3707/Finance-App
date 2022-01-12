import React from "react";
import { Link } from "react-router-dom";

export default function Chapters() {
  return (
    <section>
      <h1>This is Chapters page</h1>
      <ul>
        <Link to="/products/p1">C1</Link>
        <Link to="/products/p2">C2</Link>
        <Link to="/products/p3">C3</Link>
      </ul>
    </section>
  );
}
