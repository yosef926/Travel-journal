import React from "react"
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <div className="Navbar--div">
            <img src={require("../images/navbarIcon.png")} className="Navbar--logoImg" />
            <h3 className="Navbar--textImg">my travel journal.</h3>
         </div>
    )
}