import { useNavigate } from 'react-router-dom';

const CartContents = ({currentUserCart}) => {

  return (
    <div className="contents">
      <div>Cart ID: {currentUserCart.id}</div>
      <div>Date Created: {currentUserCart.date}</div>
      {/* <div>{currentUserCart.products}</div> */}
    </div>
  )
}

export default CartContents;