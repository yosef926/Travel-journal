import React from "react"
import "../styles/Card.css"


export default function Card(props) {
    return (
        <div className="Card--div">
            <img src={require(`../images/${props.image}`)} className="Card--image" />
            <div className="Card--info">
                <div className="Card--topInfo">
                    <img src={require("../images/place-logo.png")} className="Card--placeLogo"/>
                    <h6 className="Card--country">{props.country}</h6>
                    <u className="Card--linkToGoogleMaps">View on Google Maps</u>
                </div>
                <h1 className="Card--TravelPlace">{props.place}</h1>
                <h3 className="Card--date">{props.visitDate}</h3>
                <h3 className="Card--decripation">{props.information}</h3>
            </div>
        </div>
    )
}