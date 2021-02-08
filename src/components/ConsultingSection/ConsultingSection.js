import { Link } from 'react-router-dom'

import './ConsultingSection.css'

const ConsultingSection = () => {
    return (
        <div className="container">
            <div className='consulting-section'>
                <div className="section__text">
                    <p class="font-sans">
                        Die IT-Struktur sinnvoll und effizient zu konzipieren steht für uns im Vordergrund.. Was Ihr Unternehmen genau braucht, analysieren wir in einer fundierten und kostenfreien Erstberatung. Denn jedes Unternehmen ist anders – durch unsere jahrelange Erfahrung können wir auf spezielle Wünsche und Anforderungen eingehen.
                        <br />
                        <br />
                        Im Gespräch mit Ihnen, finden wir heraus, was für Ihren Bedarf und Ihre Geschäftsprozesse die beste Lösung wäre.
                    </p>
                </div>

                <ul className="section__links">
                    <li>
                        <Link className="font-mono" to='/ueber-uns'>
                            Über uns
                        </Link>
                    </li>
                    <li>
                        <Link className="font-mono" to='/#leistungen'>
                            Unsere Leistungen im Überblick
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ConsultingSection
