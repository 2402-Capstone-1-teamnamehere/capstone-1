import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to={'/'}>HOME</Link>
      <Link to={'/register'}>REGISTER</Link>
      <Link to={'/profile'}>PROFILE</Link>
      <Link>CART</Link>
      <Link to={'/support'}>SUPPORT</Link>
    </div>
  )
}

export default NavBar;