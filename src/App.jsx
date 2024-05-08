import { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import './css/App.css';
import AllProducts from './components/GetAllProducts';
import SingleProduct from './components/SingleProduct';
import Login from './components/Login';
import RegisterForm from './components/Register';
import NavBar from './NavBar';
import Support from './components/Support';
import Profile from './components/Profile';
import UserCarts from './components/UserCarts';
import Logout from './components/Logout';
import RequireLogin from './components/RequireLogin';

const BASE_API_URL = "https://fakestoreapi.com"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      <NavBar token={token}/>

      <Routes>
        <Route path='/' element={
          <>
            {
              !token ? 
              <Login setToken={setToken} BASE_API_URL={BASE_API_URL}/> : 
              <Logout setToken={setToken}/>
            } 
              <h1>F.I.T.E.M.I</h1>
              <AllProducts BASE_API_URL={BASE_API_URL}/>
          </>
        }/>

        <Route path='/products/:ID' element={
          <>
            {token ? <Logout setToken={setToken}/> : null}
            <SingleProduct BASE_API_URL={BASE_API_URL}/>
          </>
        }/>

        <Route path='/register' element={
          <>
            {token ? <Logout setToken={setToken}/> : null}
            <RegisterForm BASE_API_URL={BASE_API_URL} token={token} setToken={setToken}/>
          </>
        }/>

        <Route path='/support' element={
          <>
            {token ? <Logout setToken={setToken}/> : null}
            <Support />
          </>  
        }/>

        <Route path='/profile' element={
          <>
            <Logout setToken={setToken}/>
            <Profile />
          </>
        }/>

        <Route path='/carts/user/:userID' element={
          <>
            {token ? <Logout setToken={setToken}/> : null}
            <UserCarts BASE_API_URL={BASE_API_URL}/>
          </>
        }/>

        <Route path='/notlogin' element={<RequireLogin token={token} setToken={setToken} BASE_API_URL={BASE_API_URL}/>} />
      </Routes>

    </>
  )
}

export default App