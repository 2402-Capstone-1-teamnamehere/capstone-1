import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({BASE_API_URL}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    GetProductDetails();
  }, []);

  const GetProductDetails = async() => {
    try {
      const response = await fetch(`${BASE_API_URL}/products/${ID}`)
      const result = await response.json()
      setProduct(result);
    } catch(error) {console.log(error)};
  }

  return (
    <div>

    </div>
  )
}

export default SingleProduct;