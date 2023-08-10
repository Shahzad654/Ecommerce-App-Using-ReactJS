import React from 'react'
import './footer.css'
import {Link, Routes, Route} from 'react-router-dom'
import {BsFacebook, BsTwitter, BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
  <div className="footer">
    <div className="left_footer">
      <div className="social_icons">
        <BsFacebook />
      </div>
      <div className="social_icons">
        <BsTwitter />
      </div>
      <div className="social_icons">
        <BsPinterest />
      </div>
    </div>

    <div className="right_footer">
      <ul>
        <li>
          <Link to="/" className="footer_bar">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="footer_bar">
            About
          </Link>
        </li>
        <li>
          <Link to="/product" className="footer_bar">
            Products
          </Link>
        </li>
        <li>
          <Link to="/signup" className="footer_bar">
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  </div>
  <div className="bottom_footer">
    <h3>Reserved Coyprights@2023</h3>
    <p>Awesome Shoes Company</p>
  </div>
</footer>

  )
}

export default Footer