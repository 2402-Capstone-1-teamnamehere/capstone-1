import { useNavigate } from "react-router-dom"

const Logout = ({setToken}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/");
  }
  
  return (
    <div className="logout">
      <div id="logMessage">Welcome! Happy Shopping!</div>
      <button id="logoutButton" onClick={handleClick}>LOG OUT</button>
    </div>
  )
 }

export default Logout;