const ProductQuantity = ({ handleMinus, handlePlus, cartStatus, id }) => {
  return (
    <div className="quantity">
      <button onClick={() => handleMinus({ id, quantity: cartStatus[id].quantity - 1 })}>-</button>
      <div id="quantity">{cartStatus[id].quantity}</div>
      <button onClick={() => handlePlus({ id, quantity: cartStatus[id].quantity + 1 })}>+</button>
    </div>
  )
}

export default ProductQuantity