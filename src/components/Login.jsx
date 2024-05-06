import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({BASE_API_URL}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authenticate = async() => {
    try {
      const response = await fetch(`${BASE_API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        })
      })
      const result = await response.json()
      console.log(result)
    } catch(error) {console.log(error)}
  }

  return (
    <>
      <form className="login" onSubmit={authenticate}>
        <label className="label">
          <input type="text" placeholder="username" value={username}
          onChange={(e) => setUsername(e.target.value)}>
          </input>
        </label>
        <label className="label">
          <input type="password" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)}>
          </input>
        </label>
        <input id="loginButton" type="submit" value="LOGIN"/>
      </form>
      <div id="register">
        <p>Don't have an account?</p>
        <Link id="registerLink" to="/register">Click here!</Link>
      </div>
    </>
  )
}

export default Login;