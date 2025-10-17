import { useEffect, useState } from "react";
import Child from "./Child.js";

export default function Parent() {
  const [isLoggedIn, setLogIn] = useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? <p>You are Logged In!</p> : <Child setLogIn={setLogIn} />}
    </div>
  );
}
