import './Hero.css'
import React, { useState } from 'react'


function Hero({
    src,heroText,alt,heroDesc
}){
    return (
        <div className="hero">
            <div className="hero-container">
                <img src={src} alt={alt} className="hero-image"/>
                <div className="herotext-container">
                    <div className="hero-heading">
                        <h1 className="hero-text">{heroText}</h1>
                    </div>                
                    <div className="hero-desc">
                        <p className="hero-description jp">{heroDesc}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero;