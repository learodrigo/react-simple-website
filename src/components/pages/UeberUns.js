import '../../App.css'

import Divider from '../Divider/Divider'
import Footer from '../Footer/Footer'
import ImageDivider from '../ImageDivider/ImageDivider'
import ConsultingSection from "../ConsultingSection/ConsultingSection"

const UeberUns = () => {
    return (
        <>
            <ImageDivider
                srcImage='/images/04_animation_chip.svg'
                altImge='Chip animation'
                extraClass='yellow'
            />
            <Divider text='Über Uns ↓' />
            <ConsultingSection />
            <Footer />
        </>
    )
}

export default UeberUns
