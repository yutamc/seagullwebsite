import React from 'react'
import './Footer.css'
import { IoLogoInstagram, IoLogoTwitter} from 'react-icons/io'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <IconContext.Provider value={{color: 'white', size:'30px'}}>
            <div className="footerContainer">
                <div className="emailInputCont">
                    <h2 className="footer-text jp">感想、アイデア、連絡はこちらから</h2>
                    <input type="text" className="emailInput jp"/>
                    <input type="text" className="title jp"/>
                    <input type="text" className="name jp"/>
                    <input type="text" className="main jp"/>
                </div>
                <div className="lastWords">
                    <p className="footer-text">
                        Thanks For Visiting Our Site!
                    </p>
                </div>
                <div className="icons">
                    <Link className="iconInstagram">
                    <IoLogoInstagram  />
                    </Link>
                    <IoLogoTwitter />
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Footer;
