import React, { useState } from "react";
import "./styles.css";
function App() {
  const [data, setData] = useState({ username: "", password: "" });
  const { username, password } = data;
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <h1>SV Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={username}
          onChange={onChange}
          name="username"
          placeholder="Username"
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          onChange={onChange}
          name="password"
          placeholder="Password"
        />{" "}
        <br />
        <input type="submit" className="btn" name="submit" />
      </form>
    </div>
  );
}
export default App;
