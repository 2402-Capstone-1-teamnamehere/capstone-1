import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="login">
        <label className="label">
          <input type="text" placeholder="username" value={username}
          onChange={(e) => setUsername(e.target.value)}>
          </input>
        </label>
        <label className="label">
          <input type="text" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)}>
          </input>
        </label>
        <button id="loginButton">Login</button>
        <button id="registerButton">Register</button>
      </form>
    </>
  )
}

export default Login;