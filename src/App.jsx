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

const BASE_API_URL = "https://fakestoreapi.com"

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<> <Login/>  <h1>F.I.T.E.M.I</h1> <AllProducts BASE_API_URL={BASE_API_URL}/> </>} />
        <Route path='/products/:ID' element={<SingleProduct BASE_API_URL={BASE_API_URL}/>} />
        <Route path='/register' element={<RegisterForm BASE_API_URL={BASE_API_URL} token={token} setToken={setToken}/>} />
        <Route path='/support' element={<Support />} />
        <Route path='/profile' element ={<Profile />} />
      </Routes>

    </>
  )
}

export default App