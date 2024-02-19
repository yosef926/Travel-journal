import React from "react"
import "../styles/NavBar.css"

export default function Navbar() {
    return (
        <div className="Navbar--div">
            <img src={require("../images/navbarIcon.png")} className="Navbar--logoImg" />
            
        </div>
    )
}