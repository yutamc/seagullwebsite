import React, { useState } from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import { featuresObjOne, threeCardsData } from './Data'
import ThreeCards from '../Components/ThreeCards'

function Home () {
   
    return (
        <div className="home-container">
            <Hero src='./Seagull.jpg' heroText='飛ぼう。' alt='seagull' heroDesc="新しいスタディスタイルをあなたへ。" />
            <ThreeCards {...threeCardsData}/>
            <Features {...featuresObjOne} />
            
        </div>
        
    )
}

export default Home;