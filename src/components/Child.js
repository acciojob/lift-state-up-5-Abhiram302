import React from "react";

export default function Child({ isLoggedIn, setLogIn }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    setLogIn(true);
  };

  // show form only if not logged in
  if (isLoggedIn) {
    return null;
  }

  return (
    <div>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">UserName:</label>
        <input id="name" type="text" />

        <label htmlFor="word">Password:</label>
        <input id="word" type="password" />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}