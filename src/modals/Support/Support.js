import Button from '../../components/Button/Button'
import Divider from '../../components/Divider/Divider'

import { Wrapper } from './Support.styles'

const Support = ({ isModalOpened, closeModal }) => {
    const defaultTextArea = `Hi,
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

Viele Grüße
Max`

    return (
        <Wrapper>
            <Button
                onClick={closeModal}
                buttonStyle='navbar__icon squre'
            >
                <img src='images/menu.svg' alt='Menu icon' />
            </Button>

            <div className='modal__yellow'>
                <Divider text='Support' />

                <div className='container modal__info'>
                    <div className='info__column'>
                        <p className='information__text font-sans'>
                            Kontaktieren Sie uns unter unserer Rufnummer <u>+49 89 5566778-0</u> oder senden Sie uns eine Nachricht über das unten stehende <a href='#kontakt' >Kontakt-Formular</a>.<br />
                            <br />
                            Über unser Ticketsystem können Sie Unterstützung anforden. Unsere Fernwartung hilft Ihnen gerne!
                        </p>
                        <div className='modal__buttons'>
                            <button className='font-mono'>Ticket erstellen</button>
                            <button className='font-mono'>Fernwartung</button>
                        </div>
                    </div>
                    <div className='info__link'>
                        <ul className='link font-mono'>
                            <li>
                                <a href='#'>Download-Link zum aktuellen TeamViewer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='modal__dark' id='kontakt'>
                <Divider text='Kontakt' />

                <div className='container modal__column'>
                    <form className='modal__form'>
                        <div className='form__big'>
                            <label className='form__label font-mono' htmlFor="help-textarea">Wie können wir helfen?</label>
                            <textarea className='font-sans' id="help-textarea" name="help-textarea" placeholder={defaultTextArea}>
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

                        <div className='modal__buttons'>
                            <button className='submit__button'>
                                Abschicken
                            </button>
                        </div>
                    </form>

                    <div className='info__link'>
                        <ul className='link font-mono'>
                            <li>
                                <a className='white' href='mailto:info@enter-support.de'>info@enter-support.de</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Support
