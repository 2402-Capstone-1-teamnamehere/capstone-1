const ProductDescription = ({currentProduct}) => {
  return (
    <div className="descriptions">
      <div id="title">{currentProduct.title}</div>
      <img id="image" src={currentProduct.image}/>
      <div id="price">${currentProduct.price}</div>
      <div id="rating">Rating: {currentProduct.rating.rate} /5 ★</div>
      <div id="text">ON SALE!!!</div>
    </div>
  )
}

export default ProductDescription;