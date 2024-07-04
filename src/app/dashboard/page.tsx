"use client";
import React, { useState } from "react";

function Dashdoard() {
  const [value, setvalue] = useState("");
  return (
    <div>
      Dashdoard
      <input
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        type="text"
        name=""
        id=""
      />
      input is = {value}
    </div>
  );
}

export default Dashdoard;
