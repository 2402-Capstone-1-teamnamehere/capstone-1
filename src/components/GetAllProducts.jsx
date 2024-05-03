import { useState, useEffect } from 'react';
import ProductDescription from './ProductDescription';

const AllProducts = ({BASE_API_URL}) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    GetAllProducts()
  }, []);
  
  const GetAllProducts = async() => {
    try {
      const response = await fetch(`${BASE_API_URL}/products`)
      const result = await response.json()
      setAllProducts(result)
      console.log(allProducts);

    } catch (error) {console.log(error)}
  }

  return (
    <section className="main">
      {
        allProducts.map((currentProduct) => {
          return <ProductDescription key={currentProduct.id} currentProduct={currentProduct}/>
        })
      }
    </section>
  )
};

export default AllProducts;