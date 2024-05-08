import { useNavigate } from "react-router-dom"

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token")
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