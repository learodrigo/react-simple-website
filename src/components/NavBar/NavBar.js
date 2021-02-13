import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'
import SupportModal from '../../modals/Support/Support'

import { Wrapper } from './NavBar.styles'

const NavBar = () => {
    const [ click, setClick ] = useState(false)
    const [isModalOpened, setModal] = useState(false)

    const openModal = () => {
        setModal(!isModalOpened)
        const b = document.getElementsByTagName('body')[0]
        b.classList.add('no-scroll')
    }
    const closeModal = () => {
        setModal(false)
        const b = document.getElementsByTagName('body')[0]
        b.classList.remove('no-scroll')

    }

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            {isModalOpened &&
                <SupportModal isModalOpened={isModalOpened} closeModal={closeModal} />
            }

            <Wrapper>
                <div className='navbar__menu'>
                    {(!isModalOpened && !click ) &&
                        <Button
                            buttonStyle='modal__button'
                            onClick={openModal}
                        >
                            Support
                        </Button>
                    }

                    <Button
                        onClick={handleClick}
                        buttonStyle='navbar__icon squre'
                    >
                        <img src='images/menu.svg' alt='Menu icon' className={click ? 'rotated' : ''} />
                    </Button>
                </div>

                <div className={click ? 'navbar__container' : 'hidden'}>
                    <ul className='navbar__links'>
                        <li className='navbar__link'>
                            <a href='/#consulting' className='font-sans' onClick={closeMobileMenu}>
                                Consulting
                            </a>
                        </li>
                        <li className='navbar__link'>
                            <a href='/#leistungen' className='font-sans' onClick={closeMobileMenu}>
                                Leistungen
                            </a>
                        </li>
                        <li className='navbar__link'>
                            <a href='/#unsere-partners' className='font-sans' onClick={closeMobileMenu}>
                                Unsere partners
                            </a>
                        </li>
                        <li className='navbar__link'>
                            <Link to='/ueber-uns' className='font-sans' onClick={closeMobileMenu}>
                                Über uns
                            </Link>
                        </li>
                        <br />
                        <br />
                        <li className='navbar__link'>
                            <Link to='/impressum' className='font-sans' onClick={closeMobileMenu}>
                                Impressum
                            </Link>
                        </li>
                        <li className='navbar__link'>
                            <Link to='/datenschutz' className='font-sans' onClick={closeMobileMenu}>
                                Datenschutz
                            </Link>
                        </li>
                    </ul>

                    <div className='navbar__contact font-mono'>
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
            </Wrapper>
        </>
    )
}

export default NavBar
