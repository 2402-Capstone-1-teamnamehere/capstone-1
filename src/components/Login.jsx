import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form className="login">
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
        <button className="logRegButton">Login</button>
        <button onClick={()=>navigate("/register")} className="logRegButton">Register</button>
      </form>
    </>
  )
}

export default Login;