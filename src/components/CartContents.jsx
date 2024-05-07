import { useNavigate } from 'react-router-dom';

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
    <button id="deleteButton">Delete Cart</button>
  </> 
  )
}

export default CartContents;