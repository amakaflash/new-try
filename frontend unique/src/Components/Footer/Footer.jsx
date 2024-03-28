import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>UNIQUE KINGS AND QUEENS</p>
      </div>
      <ul className="footer-links">
        <li><a href="/shipping">Shipping</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="Instagram icon" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="Pintester Icon" />
        </div>
        <div className="footer-icons-container">
        <a href="https://www.whatsapp.com/send?phone=07025072414" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp_icon} alt="WhatsApp Icon" />
        </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ {new Date().getFullYear()} - All Right Reserved.</p>
      </div>
    </div>
  )
  }

export default Footer
