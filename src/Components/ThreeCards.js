import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import "./ThreeCards.css"

function ThreeCards({
    title,subHeading,cardDataOne,cardDataTwo,cardDataThree
}) {
    return (
        <div className="section-container">
            <div className="title-container">
                <h1 className="title">{title}</h1>
                <h3 className="subHeading">{subHeading}</h3>
            </div>
            <div className="threeCardsContainer">
                <Link to="/">
                    <Card {...cardDataOne}/>
                </Link>
                <Link to="/"> 
                    <Card {...cardDataTwo}/>
                </Link>
                <Link to="/">
                <Card {...cardDataThree}/>
                </Link>
                
            </div>
        </div>
    )
}

export default ThreeCards
