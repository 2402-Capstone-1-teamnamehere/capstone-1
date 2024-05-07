import { useNavigate } from 'react-router-dom';
import DeleteCart from './DeleteCart';

const BASE_API_URL = "https://fakestoreapi.com"

const CartContents = ({currentUserCart}) => {
  const cartItems = currentUserCart.products;

  return (
  <>
    <div className="contents">
      <div className="header">
        <div>Cart ID: #{currentUserCart.id}</div>
        <div>Date Created: {currentUserCart.date}</div>
      </div>
      <div className="item">
        {cartItems.map((item, index) => {
          return (
            <div className="pair" key={index}>
              <div>Product ID: #{item.productId}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          )
        })}
      </div>
    </div>
    <DeleteCart BASE_API_URL={BASE_API_URL} currentCart={currentUserCart}/>
  </> 
  )
}

export default CartContents;