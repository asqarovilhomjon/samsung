import "./Header.scss"
import React from 'react'
import rasm from "../../assets/samsung logo.png"
import { IoSearchSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const NAVBAR__ITEMS = ["Shop", "AI", "Mobile", "TV&Audio", "Appliances", "Computing", "Displays", "Accessories", "SmartThings"]
const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <nav className="navbar">
                <img className="navbar__logo" src={rasm} alt="logo" />
                <ul className="navbar__collection">
                    {
                        NAVBAR__ITEMS.map((link, index) => {
                            return <li key= {index} className="navbar__item">
                                <a href="#" className="navbar__link"><span>{link}</span></a>
                            </li>                                
                        })
                    }
                </ul>
                <ul className="navbar__categories">
                    <li className="category"><a href="#"><span>Explore</span></a></li>
                    <li className="category"><a href="#"><span>Support</span></a></li>
                    <li className="category"><a href="#"><span>For Business</span></a></li>                   
                </ul>
                <div className="navbar__icons">
                    <IoSearchSharp />
                    <BsCart2 />
                    <FaRegUser />
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header