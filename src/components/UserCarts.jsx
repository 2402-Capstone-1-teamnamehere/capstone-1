import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import CartContents from './CartContents';

const UserCarts = ({BASE_API_URL}) => {
  const [usercarts, setUserCarts ] = useState([]);
  const { userID } = useParams();

  const GetUserCarts = async() => {
    try {
      const response = await fetch(`${BASE_API_URL}/carts/user/${userID}`)
      const result = await response.json()
      setUserCarts(result)
      console.log(usercarts)

    } catch(error) {console.log(error)}
  }

  useEffect(() => {
    GetUserCarts();
  }, []);
  
  return (
    <>
      <section className="carts">
        {
          usercarts.map((currentUserCart) => {
            return <CartContents key={currentUserCart.id} currentUserCart={currentUserCart}/>
          })
        }
      </section>
    </>
  )
}

export default UserCarts;