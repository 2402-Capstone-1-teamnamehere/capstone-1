import { useNavigate } from 'react-router-dom';

const ProductDescription = ({currentProduct}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="descriptions" onClick={()=>navigate(`/products/${currentProduct.id}`)}>
        <div id="title">{currentProduct.title}</div>
        <img id="image" src={currentProduct.image}/>
        <div id="price">${currentProduct.price}</div>
        <div id="rating">Rating: {currentProduct.rating.rate} /5 ★</div>
        <div id="text">ON SALE!!!</div>
      </div>
    </>
  )
}

export default ProductDescription;