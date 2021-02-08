import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import './NavBar.css'

const NavBar = () => {
    const [ click, setClick ] = useState(false)
    const [ button, setButton ] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-events">
                    {button && <>
                        <Button
                            buttonStyle='btn--outline show-botton'
                            onClick={closeMobileMenu}
                        >
                            Support
                        </Button>
                        <Button
                            onClick={handleClick}
                            buttonStyle={`navbar-icon show-botton ${click ? 'rotated' : ''}`}
                        >
                            +
                        </Button>
                    </>}
                </div>

                <div className={click ? 'navbar-container' : 'hidden'}>
                    <ul className="navbar-inner-links">
                        <li className='navbar-item'>
                            <a href='#consulting' onClick={closeMobileMenu}>
                                Consulting
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#leistungen' onClick={closeMobileMenu}>
                                Leistungen
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#unsere-partners' onClick={closeMobileMenu}>
                                Unsere partners
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/ueber-uns' onClick={closeMobileMenu}>
                                Über uns
                            </Link>
                        </li>
                    </ul>

                    <ul className='navbar-legal-links'>
                        <li className='navbar-item'>
                            <Link to='/impressum' onClick={closeMobileMenu}>
                                Impressum
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/datenschutz' onClick={closeMobileMenu}>
                                Datenschutz
                            </Link>
                        </li>
                    </ul>

                    <div className='navbar-contact'>
                        IT Consulting GmbH
                        Am der Straße 24
                        10815 Musterhausen
                        Google Maps

                        Öffnungszeiten
                        Mo-Fr, 09:00-18:00

                        T +49 89 5566778-0
                        F +49 89 5566778-29

                        info@it-consulting.de
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
