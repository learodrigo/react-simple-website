import { Helmet } from 'react-helmet'

import '../../App.css'

import Divider from '../../components/Divider/Divider'
import ImageDivider from '../../components/ImageDivider/ImageDivider'
import ConsultingSection from '../../components/ConsultingSection/ConsultingSection'

const link = 'Jetzt als IT Projektleiter (m/w) – Schwerpunkt Apple macOS OS X bewerben!'

const UeberUns = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Über uns | Leandro Rodrigo</title>
                <meta name="description" content="Data privacy page" />
            </Helmet>

            <ImageDivider
                srcImage='/images/04_animation_chip.svg'
                altImge='Chip animation'
                extraClass='yellow'
            />

            <Divider text='Über Uns ↓' />

            <ConsultingSection link={link} />
        </>
    )
}

export default UeberUns
