import React, { useState } from 'react'
import './Leftmain.css'
const Leftmain = () => {
  const [addNumb, setAddNumb] = useState(1)
  const handelAdd = () => {
    setAddNumb(addNumb + 1)
  }
  const handelMin = () => {
    if (addNumb > 0) {
      setAddNumb(addNumb - 1)
    }
  }
  return (
    <div className="leftmain">
      <div className="left-conatiner">
        <div className="back-to">
          <i class="fa-solid fa-arrow-left"></i>
          <h5>
            <span>Chair</span> / Meryl Lounge Chair
          </h5>
        </div>
        <div className="leftcontent">
          <h1>Meryl Lounge Chair</h1>
          <div className="prd-price">
            <span className="price">$149.99</span>
            <div className="rating">
              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              4.6 / 5.0 (556)
            </div>
          </div>
          <p className="product-desc">
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </p>
          <div className="color">
            <div className="ellipse1"></div>
            <div className="ellipse2"></div>
            <div className="ellipse3"></div>
            <div className="ellipse4"></div>
          </div>
          <div className="addtocart">
            <div className="itemnumbr">
              <span onClick={handelAdd}>+</span>
              <span>{addNumb}</span>
              <span onClick={handelMin}>-</span>
            </div>
            <button>Add to Cart</button>
          </div>
          <p className="shiping-info">
            Free 3-5 day shipping • Tool-free assembly • 30-day trial
          </p>
          <div className="whishes">
            <div className="addtowish">
              <span>
                <i class="fa-regular fa-heart"></i>
              </span>
              <p>Add to Wishlist</p>
            </div>
            <div className="socails">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftmain
