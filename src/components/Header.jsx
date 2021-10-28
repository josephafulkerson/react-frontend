import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <NavLink
        to="/"
        style={{
          color: "blue",
        }}
      >Home</NavLink>

      <NavLink
        to="/forbrokers"
        style={{
          color: "blue",
        }}
      >For Brokers</NavLink>
    </div>
  );
};

export default Header;
