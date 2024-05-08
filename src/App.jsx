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

const BASE_API_URL = "https://fakestoreapi.com"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={
          <>
            {
              !token ? 
              <Login setToken={setToken} BASE_API_URL={BASE_API_URL}/> : 
              <Logout />
            } 
              <h1>F.I.T.E.M.I</h1>
              <AllProducts BASE_API_URL={BASE_API_URL}/>
          </>
        }/>
        <Route path='/products/:ID' element={
          <>
            {token ? <Logout /> : null}
            <SingleProduct BASE_API_URL={BASE_API_URL}/>
          </>
        }/>
        <Route path='/register' element={
          <>
            {token ? <Logout /> : null}
            <RegisterForm BASE_API_URL={BASE_API_URL} token={token} setToken={setToken}/>
          </>
        }/>
        <Route path='/support' element={
          <>
            {token ? <Logout /> : null}
            <Support />
          </>  
        }/>
        <Route path='/profile' element={
          <>
            {token ? <Logout /> : null}
            <Profile />
          </>
        }/>
        <Route path='/carts/user/:userID' element={<UserCarts BASE_API_URL={BASE_API_URL}/>} />

      </Routes>

    </>
  )
}

export default App

// condition ? show : null