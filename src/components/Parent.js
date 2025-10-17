import React, { useState } from "react";
import Child from "./Child.js";

export default function Parent() {
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass both state and setter */}
      <Child isLoggedIn={isLoggedIn} setLogIn={setLogIn} />

      {/* Display login status */}
      {isLoggedIn && <p>You are Logged In!</p>}
    </div>
  );
}