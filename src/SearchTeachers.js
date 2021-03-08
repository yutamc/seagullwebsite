import React from 'react'
import Button from './Components/Button'

function SearchTeacher(){
    return(
        <div className="seach-teacher-container"> 
            <div className="seach-teacher-cards">
                <Cards />
            </div>
            <div className="search-teacher-buttons">
                <Button className="backButton" />
                <Button className="fileButton" />
                <Button className="nextButton" />
            </div>
        </div>
       
    )

}