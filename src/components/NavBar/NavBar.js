import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import Support from '../modals/Support/Support'

import './NavBar.css'

const NavBar = () => {
    const [ click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-menu">
                    <Support />
                    <Button
                        onClick={handleClick}
                        buttonStyle={`navbar-icon squre show-botton ${click ? 'rotated' : ''}`}
                    >
                        +
                    </Button>
                </div>

                <div className={click ? 'navbar-container' : 'hidden'}>
                    <ul className="navbar-inner-links">
                        <li className='navbar-item'>
                            <a href='/#consulting' className='font-sans' onClick={closeMobileMenu}>
                                Consulting
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href='/#leistungen' className='font-sans' onClick={closeMobileMenu}>
                                Leistungen
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <a href='/#unsere-partners' className='font-sans' onClick={closeMobileMenu}>
                                Unsere partners
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/ueber-uns' className='font-sans' onClick={closeMobileMenu}>
                                Über uns
                            </Link>
                        </li>
                        <br />
                        <br />
                        <li className='navbar-item'>
                            <Link to='/impressum' className='font-sans' onClick={closeMobileMenu}>
                                Impressum
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/datenschutz' className='font-sans' onClick={closeMobileMenu}>
                                Datenschutz
                            </Link>
                        </li>
                    </ul>

                    <div className='navbar-contact font-mono'>
                        IT Consulting GmbH<br />
                        Am der Straße 24<br />
                        10815 Musterhausen<br />
                        Google Maps<br />
                        <br />
                        Öffnungszeiten<br />
                        Mo-Fr, 09:00-18:00<br />
                        <br />
                        T +49 89 5566778-0<br />
                        F +49 89 5566778-29<br />
                        <br />
                        info@it-consulting.de
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
