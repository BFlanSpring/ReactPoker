import React, { useState } from "react";
import "./Card.css";

function Card({ name, image}) {
    const [{ angle, xPosition, yPosition}] = useState({
        angle: Math.random() * 90 - 45,
        xPosition: 40,
        yPosition: 40,
    });

    const transform = `translate(${xPosition}px, ${yPosition}px) rotate(${angle}deg)`;

    return <img
        className="Card"
        alt={name}
        src={image}
        style={{ transform }} />;
}

export default Card;