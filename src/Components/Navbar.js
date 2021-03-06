import './Navbar.css'
import { GiHummingbird } from 'react-icons/gi'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext }　from 'react-icons/lib'
import Button from './Button'
function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#2A93D5' }}>
         <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <GiHummingbird className="navbar-icon" />
                    Seagull
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> :<FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className="nav-links jp" onClick={closeMobileMenu}>
                        先生から探す   
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className="nav-links jp" onClick={closeMobileMenu}>
                        質問を投げる  
                        </Link>
                    </li>
                    <li className="nav-btn" >
                        { button ? ( 
                        <Link to='/sign-up' className="btn-link">
                            <Button buttonStyle='btn--outline' className="jp">サインイン・登録</Button>
                        </Link>
                        ) : (
                            <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline' buttonSize = 'btn--mobile' className="jp">
                                    サインイン・登録
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar;