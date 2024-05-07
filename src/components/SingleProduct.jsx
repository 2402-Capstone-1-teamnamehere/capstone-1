import { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";

const SingleProduct = ({BASE_API_URL}) => {
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState([])
  const { ID } = useParams();
  
  const GetProductDetails = async() => {
    try {
      const response = await fetch(`${BASE_API_URL}/products/${ID}`)
      const result = await response.json()
      setProduct(result);
      setRating(result.rating);
      console.log(result)
      
    } catch(error) {console.log(error)}
  }
  
  useEffect(() => {
    GetProductDetails();
  }, []);

  return (
    <div className="details">
      <div id="productTitle">{product.title}</div>
      <div id="productCategory">Category: {product.category}</div>
      <img id="productImage" src={product.image}/>
      <div id="productDescription">DESCRIPTION: {product.description}</div>
      <div id="productPrice">${product.price}</div>
      <div id="productRate">Rating: {rating.rate} /5★</div>
      <div id="productCount">Reviews: {rating.count}</div>
      <button id="productButton">Add to Cart</button>
    </div>
  )
}

export default SingleProduct;