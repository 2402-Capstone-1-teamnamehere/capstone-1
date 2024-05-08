import { Link } from 'react-router-dom';

const NavBar = ({token}) => {

  return (
    <div className="navBar">
      <Link to={'/'}>HOME</Link>
      <Link to={'/register'}>REGISTER</Link>
      {token ? <Link to={'/profile'}>PROFILE</Link> : <Link to={'/notlogin'}>PROFILE</Link>}
      {token ? <Link to={'/carts/user/1'}>CART</Link> : <Link to={'/notlogin'}>CART</Link>}
      <Link to={'/support'}>SUPPORT</Link>
    </div>
  )
}

export default NavBar;