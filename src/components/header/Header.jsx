import "./Header.scss"
import logo from "../../assets/images/images.png"
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
const NAVBAR_LINK = ["Shop", "Al", "Mobile", "TV & Audio", "Appliances", "Computing", "Displays", "Accessories", "SmartThings"]
const NAVBAR_LINK_TWO = ["Explore", "Support", "For Business"]
const Header = () => {
    const ITEMS = [
        NAVBAR_LINK?.map((item) => (
            <li key={item.id} className="nav_list">
                <a href="#">
                    <span>{item}</span>
                </a>
            </li>
        ))
    ]
    const ITEM = [
        NAVBAR_LINK_TWO?.map((link) => (
            <li key={link.id} className="nav_list">
                <a href="#">
                    <span>{link}</span>
                </a>
            </li>
        ))
    ]
    return (
        <header className="header">
            <a href="#">
                <img className="logo" src={logo} alt="logo" />
            </a>
            <nav className="navbar">
                <ul className="navbar_item">
                    {ITEMS}
                </ul>
                <ul className="navbar_item_two">
                    {ITEM}
                </ul>
            </nav>
            <div className="header_icons_content">
                <IoSearchSharp className="header_icons" />
                <FiShoppingCart className="header_icons" />
                <HiOutlineUser className="header_icons" />
            </div>

        </header>
    )
}

export default Header