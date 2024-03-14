import React from 'react'
import './cart.css'
const Cart = () => {
  return (
    <div className="cart">
      <h1>Product</h1>
      <div className="item">
        <img src={'3.jpg'} alt="" />
        <div className="detail">
          <h1>Meryl Lounge Chair</h1>
          <p>
            {` The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs. `.substring(0, 40)}
          </p>
          <div className="prices">1 X $149.99</div>
        </div>
      </div>
      <div className="total">
        <span>SubTotal</span>
        <span>$149.99</span>
      </div>
      <div>
        <button>checkout</button>
      </div>

      <span className="reset">Reset cart</span>
    </div>
  )
}

export default Cart
