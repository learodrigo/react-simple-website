import { useState } from 'react'

import Button from '../../components/Button/Button'
import Divider from '../../components/Divider/Divider'

import { Wrapper } from './Support.styles'

const Support = () => {
    const [ modal, setModal ] = useState(false)

    const openModal = () => setModal(!modal)
    const closeModal = () => setModal(false)

    const defaultTextArea = `Hi,
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

Viele Grüße
Max`

    return (
        <Wrapper>
            {!modal && <Button
                    buttonStyle='btn--outline show-botton modal__button'
                    onClick={openModal}
                >
                    Support
                </Button>
            }

            {modal && <div className='modal'>
                <div className='container yellow'>
                    <Button
                        onClick={closeModal}
                        buttonStyle='navbar-icon squre show-botton modal__button'
                    >
                        <img src='images/menu.svg' alt='Menu icon' className={modal ? 'rotated' : ''} />
                    </Button>

                    <div className='modal-container'>
                        <h2 className='font-mono'>Support</h2>

                        <div className='row'>
                            <div className='modal__information'>
                                <div className='information__text font-sans'>
                                    <p>
                                        Kontaktieren Sie uns unter unserer Rufnummer <u>+49 89 5566778-0</u> oder senden Sie uns eine Nachricht über das unten stehende <u>Kontakt-Formular</u>.<br />
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
                </div>

                <div className='modal__divider'>
                    <Divider text='Kontakt' id='kontakt' />
                </div>

                <div className='container'>
                    <form className='modal__form'>
                        <div className='form__big'>
                            <label className='form__label font-mono' htmlFor="help-textarea">Wie können wir helfen?</label>
                            <textarea className='font-sans' id="help-textarea" name="help-textarea" defaultValue={defaultTextArea}>
                            </textarea>
                        </div>
                        <div className='form__double'>
                            <div>
                                <label className='form__label font-mono' htmlFor="name">Vorname</label>
                                <input className='font-sans' type='text' placeholder='Max' id='name' name='name' />
                            </div>
                            <div>
                                <label className='form__label font-mono' htmlFor="surname">Nachname</label>
                                <input className='font-sans' type='text' placeholder='Mustermann' id='surname' name='surname' />
                            </div>
                        </div>
                        <div className='form__simple'>
                            <label className='form__label font-mono' htmlFor="email">E-Mail</label>
                            <input className='font-sans' type='email' placeholder='max.mustermann@web.de' id='email' name='email' />
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
        </Wrapper>
    )
}

export default Support
