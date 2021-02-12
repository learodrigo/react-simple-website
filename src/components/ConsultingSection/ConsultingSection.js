import { Link } from 'react-router-dom'

import { Wrapper } from './ConsultingSection.styles'

const ConsultingSection = ({ link = '' }) => {
    return (
        <Wrapper className='container'>
                <div className="section__text">
                    <p className="font-sans">
                        Die IT-Struktur sinnvoll und effizient zu konzipieren steht für uns im Vordergrund.. Was Ihr Unternehmen genau braucht, analysieren wir in einer fundierten und kostenfreien Erstberatung. Denn jedes Unternehmen ist anders – durch unsere jahrelange Erfahrung können wir auf spezielle Wünsche und Anforderungen eingehen.
                        <br />
                        <br />
                        Im Gespräch mit Ihnen, finden wir heraus, was für Ihren Bedarf und Ihre Geschäftsprozesse die beste Lösung wäre.
                    </p>
                </div>

                <ul className="section__links">
                    {!link ? <>
                        <li>
                            <Link className="font-mono" to='/ueber-uns'>
                            Erfahre mehr über uns
                            </Link>
                        </li>
                        <br />
                        <li>
                            <Link className="font-mono" to='/#leistungen'>
                                Unsere Leistungen im Überblick
                            </Link>
                        </li>
                    </>
                    :
                    <li>
                        <a href='#' className="font-mono">
                            {link}
                        </a>
                    </li>
                    }
                </ul>
        </Wrapper>
    )
}

export default ConsultingSection
