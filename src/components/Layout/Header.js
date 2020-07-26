import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon icon"
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links on the right */}
      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__options">
            <span className="header__optionLineOne">Hello Roni</span>
            <span className="header__optionsLineTwo">Sign In</span>
          </div>
        </Link>

        <Link className="header__link" to="/login">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionsLineTwo">& Orders</span>
          </div>
        </Link>

        <Link className="header__link" to="/login">
          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionsLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* Basket icon with number */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionsBasket">
          {/* shopping basket icon */}
          <ShoppingBasket />
          {/* number of items in the basket */}
          <span className="header__optionsLineTwo header__basketCount">0</span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
