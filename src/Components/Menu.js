import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <NavLink to="/Pagpersonajes"> Personajes</NavLink>
      <NavLink to="/Pagcomics"> Comics</NavLink>
      
    </div>
  );
}

export default Menu;