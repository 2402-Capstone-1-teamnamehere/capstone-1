import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({BASE_API_URL, setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/auth/login`, {
        method: 'POST',
        body: new URLSearchParams({
          username,
          password
        })
      })
      const result = await response.json()
      console.log(result)
      const token = result.token
      setToken(token)
      localStorage.setItem("token", token)
      console.log(token)
      
    } catch(error) {console.log(error)}
  }

  return (
    <>
      <form className="login" onSubmit={authenticate}>
        <label className="label">
          <input type="text" placeholder="username" value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        </label>

        <label className="label">
          <input type="password" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </label>

        <input id="loginButton" type="submit" value="LOGIN"/>
      </form>

      <div id="register">
        <p>Don't have an account?</p>
        <Link id="registerLink" to="/register">Register here!</Link>
      </div>
    </>
  )
}

export default Login;