import { useState } from 'react'

import Button from '../../Button/Button'
import Divider from '../../Divider/Divider'

import './Support.css'

const Support = () => {
    const [ modal, setModal ] = useState(false)

    const openModal = () => setModal(!modal)
    const closeModal = () => setModal(false)

    const defaultTextArea = `Hi,
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

Viele Grüße
Max`

    return (
        <>
            {!modal && <Button
                    buttonStyle='btn--outline show-botton modal__button'
                    onClick={openModal}
                >
                    Support
                </Button>
            }

            {modal && <div className='modal'>
                <div className='container'>
                    <Button
                        onClick={closeModal}
                        buttonStyle='navbar-icon squre show-botton'
                    >
                        <img src='images/menu.svg' alt='Menu icon' className={modal ? 'rotated' : ''} />
                    </Button>
                    <div className='modal-container'>
                        <div className='modal__information'>
                            <h2 className='font-mono'>Support</h2>
                            <div className='information__text font-sans'>
                                <p>
                                    Kontaktieren Sie uns unter unserer Rufnummer +49 89 5566778-0 oder senden Sie uns eine Nachricht über das unten stehende Kontakt-Formular.<br />
                                    <br />
                                    Über unser Ticketsystem können Sie Unterstützung anforden. Unsere Fernwartung hilft Ihnen gerne!
                                </p>
                            </div>
                            <div className='information__buttons'>
                                <button className='font-mono'>Ticket erstellen</button>
                                <button className='font-mono'>Fernwartung</button>
                            </div>
                        </div>

                        <div className='modal__links font-mono'>
                            <a href='#'>→ Download-Link zum aktuellen TeamViewer</a>
                        </div>
                    </div>
                </div>

                <div className='modal__divider'>
                    <Divider text='Kontakt' id='kontakt' />
                </div>

                <div className='container'>
                    <form className='modal__form'>
                        <div className='form__big'>
                            <label htmlFor="help-textarea">Wie können wir helfen?</label>
                            <textarea id="help-textarea" name="help-textarea" defaultValue={defaultTextArea}>
                            </textarea>
                        </div>
                        <div className='form__double'>
                            <div>
                                <label htmlFor="name">Vorname</label>
                                <input type='text' placeholder='Max' id='name' name='name' />
                            </div>
                            <div>
                                <label htmlFor="surname">Nachname</label>
                                <input type='text' placeholder='Mustermann' id='surname' name='surname' />
                            </div>
                        </div>
                        <div className='form__simple'>
                            <label htmlFor="email">E-Mail</label>
                            <input type='email' placeholder='max.mustermann@web.de' id='email' name='email' />
                        </div>
                        <div className='form__submit'>
                            <button className='submit__button'>
                                Abschicken
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            }
        </>
    )
}

export default Support
