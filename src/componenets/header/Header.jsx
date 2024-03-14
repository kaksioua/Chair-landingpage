import React, { useState } from 'react'
import Cart from './Cart'
import './Header.css'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <h1>Cozy®</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Collective</a>
            </li>
            <li>
              <a href="">Designers</a>
            </li>
            <li>
              <a href="">About us </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="icons">
            <span>
              <i class="fa-solid fa-bars"></i>
            </span>
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          <div className="addcart" onClick={() => setIsOpen(!isOpen)}>
            <div className="chekouitems"> 1</div>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
      {isOpen && <Cart />}
    </div>
  )
}

export default Header
