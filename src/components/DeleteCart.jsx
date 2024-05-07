import { useState } from 'react'

const DeleteCart = ({BASE_API_URL, currentCart}) => {
  const [cart, setCart] = useState([]);

  const Delete = async() => {

    try {
      const response = await fetch(`${BASE_API_URL}/carts/${currentCart.id}`, {
        method: "DELETE"
      })
      const result = await response.json()
      setCart(result)
      console.log(cart)
    } catch(error) {console.log(error)}
  }
  return (
    <>
      <button id="deleteButton" onClick={Delete}>Delete Cart</button>
      <div id="removeMessage">Cart ID #{cart.id} has been removed.</div>
    </>

  )
}

export default DeleteCart;