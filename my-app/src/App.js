import React from "react"
import Navbar from "./components/NavBar.js"
import Card from "./components/Card.js"
import data from "./data.js"


export default function App() {
    const Cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="App--div">
            <Navbar />
            {Cards}
        </div>
    )
}