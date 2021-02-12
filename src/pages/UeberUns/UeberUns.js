import '../../App.css'

import Divider from '../../components/Divider/Divider'
import ImageDivider from '../../components/ImageDivider/ImageDivider'
import ConsultingSection from '../../components/ConsultingSection/ConsultingSection'

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
        </>
    )
}

export default UeberUns
