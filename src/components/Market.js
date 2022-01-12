import React from "react";
import { useParams } from "react-router-dom";

function Market() {
  const params = useParams();
  return (
    <div>
      <h1>Market</h1>
    </div>
  );
}

export default Market;
