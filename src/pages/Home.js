import React, { useState } from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import { featuresObjOne } from './Data'

function Home () {
   
    return (
        <div className="home-container">
            <Hero src='./Seagull.jpg' heroText='飛ぼう。' alt='seagull' heroDesc="新しいスタディスタイルをあなたへ。" />
            <Features {...featuresObjOne} />
        </div>
        
    )
}

export default Home;