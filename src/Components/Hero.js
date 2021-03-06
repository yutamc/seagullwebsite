import React from 'react'
import './Hero.css'

function Hero({
    src,heroText,alt,heroDesc
}){
    return (
        <div className="hero">
            <div className="hero-container">
                <img src={src} alt={alt} className="hero-image"/>
                <h1 className="hero-text">{heroText}</h1>
                <p className="hero-description jp">{heroDesc}</p>
            </div>
        </div>
    )
}

export default Hero;