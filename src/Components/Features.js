import React from 'react'
import './Features.css'


function Features({
    title,description,images,LeftOrRight, alt
}) {
    return(
            <div className="features-container">
                <div className="textContainer">
                    <div className="featureTitle-container">
                        <h1 className="featureHeading">
                            { title }
                        </h1>
                    </div>
                    <div className="featuresDesc-container">
                        <p className="featureDescription jp">
                            { description }
                        </p>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={ images } alt={ alt } 
                    className= {LeftOrRight ? 
                ('features-image-right'):('features-image-left')}/>
                </div>
            </div>
        
    )
}

export default Features;