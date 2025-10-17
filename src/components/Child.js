export default function Child({ setLogIn }) {
  return (
    <div>
      <form>
        <label for="name">UserName:</label>
        <input id="name" required type="text"></input>
        <br></br>
        <br></br>
        <label for="word">Password:</label>
        <input id="word" required type="password"></input>
        <br></br>
        <br></br>
        <input
          type="submit"
          value="Log In"
          onClick={() => {
            setLogIn(true);
          }}
        ></input>
      </form>
    </div>
  );
}