import Login from "./Login";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const RequireLogin = ({token, setToken, BASE_API_URL}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(token) {
      navigate('/');
    }
  })

  return (
    <div onClick={useEffect} className="requireLog">
      <div id="logMsg">Please login to view the content on this page.</div>
      <div><Login setToken={setToken} BASE_API_URL={BASE_API_URL}/></div>
    </div>
  )
}

export default RequireLogin;