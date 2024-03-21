import React, { useRef } from "react";
import { Link } from "react-router-dom"; 
import '../assets/css/header.css';

import logo from '../assets/images/web/eco-logo.png';
import ava from '../assets/images/web/user-icon.png';

const Header = () => {
    const menuRef = useRef(null);

    const menuToggle = () => menuRef.current.classList.toggle('active-menu');
    const closeMenu = () => menuRef.current.classList.remove('active-menu'); // Hàm đóng menu

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="nav">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <span>Multimart</span>
                            </div>
                        </div>
                        <div className="navigation" ref={menuRef}>
                            <ul className="menu">
                                <li onClick={closeMenu}><i className="fa-solid fa-x"></i></li> {/* Thêm sự kiện click */}
                                <li className="item">Home</li>
                                <li className="item">Shop</li>
                                <li className="item">Cart</li>
                            </ul>
                        </div>
                        <div className="icons">
                            <span className="fav-icon"><i className="fa-solid fa-heart"></i></span> {/* Sửa class thành className */}
                            <span className="cart-icon"><i className="fa-solid fa-cart-shopping"></i></span> {/* Sửa class thành className */}
                            <span><Link to="/login"><img src={ava} alt="" /></Link></span>
                            <div className="mobile-menu">
                                <span onClick={menuToggle}>
                                    <i className="fa-solid fa-bars"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
