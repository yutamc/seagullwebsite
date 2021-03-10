import React from 'react'
import './Footer.css'
import { IoLogoInstagram, IoLogoTwitter} from 'react-icons/io'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <IconContext.Provider value={{color: 'white', size:'30px'}}>
            <div className="footerContainer">
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
