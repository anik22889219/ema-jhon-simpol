import React from 'react';
import logo from '../../images/Logo.svg'
import '../Header/Header.css'
const Header = () => {
    return (
        <nav className="nevber">
            <img src={logo} alt="" srcset="" />
            <div className="menu">
                <a href="Order">Order</a>
                <a href="Order Review">Order Review</a>
                <a href="Manage Inventory">Manage Inventory</a>
                <a href="Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;