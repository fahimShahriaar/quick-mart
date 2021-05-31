import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="header py-3">
                <img src={logo} alt="" className="d-block mx-auto" />
            </div>
            <nav>
                <a href="#">Shop</a>
                <a href="#">Order review</a>
                <a href="#">Manage Inventory Here</a>
            </nav>
            <div className="search-bar">
                <div className="container text-center">
                    <input type="search" name="search" id="search" className="w-75 my-3 px-2" placeholder="search your favorite products..."/>
                    <FontAwesomeIcon icon={faShoppingCart} className="text-white ms-3" style={{fontSize: '24px'}} />
                </div>
            </div>

        </div>


    );
};

export default Header;