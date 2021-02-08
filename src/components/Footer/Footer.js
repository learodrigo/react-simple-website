import { Link } from 'react-router-dom'

import './Footer.css'

const ServicesSection = () => {
    return (
        <footer className="footer">
            <div className='container font-mono'>
                <div className='footer__links'>
                    <Link className="footer__link">
                        IT Consulting
                    </Link>
                    <Link className="footer__link">
                        Leistungen
                    </Link>
                    <Link className="footer__link">
                        Unsere Partner
                    </Link>
                    <Link className="footer__link">
                        Über Uns
                    </Link>
                    <br />
                    <br />
                    <Link className="footer__link">
                        Impressum
                    </Link>
                    <Link className="footer__link">
                        Datenschutz
                    </Link>
                </div>

                <div>
                    <p>
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
                        <a className='footer__link' href='mailto:info@it-consulting.de'>info@it-consulting.de</a>
                    </p>
                </div>

                <div>
                    <p>
                        Wir sind zertifizierte<br />
                        <br />
                        EXCELLENCE PARTNER<br />
                        SILVER PARTNER<br />
                        <br />
                        {new Date().getFullYear()} © IT Consulting GmbH
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default ServicesSection
