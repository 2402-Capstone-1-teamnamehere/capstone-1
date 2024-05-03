import { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import './css/App.css';
import AllProducts from './components/GetAllProducts';
import SingleProduct from './components/SingleProduct';

const BASE_API_URL = "https://fakestoreapi.com"

function App() {

  return (
    <>
      <h1>F.I.T.E.M.I</h1>
      <Routes>
        <Route path='/products' element={<AllProducts BASE_API_URL={BASE_API_URL}/>} />
        <Route path='products/:ID' element={<SingleProduct BASE_API_URL={BASE_API_URL}/>} />
      </Routes>


    </>
  )
}

export default App