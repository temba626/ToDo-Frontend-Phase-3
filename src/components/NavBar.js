import React from "react";
import { NavLink } from "react-router-dom"
import "./NavBar.css";


function NavBar() {

    const linkStyles = {
        width: "100px",
        padding: "12px",
        background: "#37784d",
        textDecoration: "none",
        color: "white",
      };

      const activeStyles = {
        width: "100px",
        padding: "12px",
        background: "white",
        textDecoration: "none",
        color: "#37784d",
      };

    return (<div className="navbar">

    <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={activeStyles}
            className="navlink"
        >Home

        </NavLink>

        <NavLink
            to="/todo-list"
            exact
            style={linkStyles}
            activeStyle={activeStyles}
            className="navlink"
        >Todo List

        </NavLink>


    </div>)

}

export default NavBar;
