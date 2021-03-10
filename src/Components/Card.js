import React, { useState } from 'react'
import './Card.css'

function Card({
    src,srcTwo,alt,title
}) {
    const [imageSize, setImageSize] = useState(true)
    const handleResize = () => {
        if(window.innerWidth <= 991){
            setImageSize(false);
        }else{
            setImageSize(true)
        }
    }
    window.addEventListener("resize",handleResize)
    
    return (
        <div className="cardContainer">
            <div className="imageContainer">            
                <img src= {imageSize ? src:srcTwo} alt={alt} className="card-image"/>
            </div>
            <div className="card-text-container">
                <h3 className="card-title">{title}</h3>
            </div>
        </div>
    )
}

export default Card
