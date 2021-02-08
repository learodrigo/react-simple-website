import '../../App.css'

import ConsultingSection from '../ConsultingSection/ConsultingSection'
import Divider from '../Divider/Divider'
import ImageDivider from '../ImageDivider/ImageDivider'
import PartnersSection from "../PartnersSection/PartnersSection"
import ServicesSection from "../ServicesSection/ServicesSection"

const Home = () => {
    return (
        <>
            <ImageDivider
                srcImage='/images/01_animation_kabel.svg'
                altImge='Cables animation'
                extraClass='absolute-pos'
            />
            <Divider text='Enter ↓' id='consulting' />
            <ConsultingSection />
            <ImageDivider
                srcImage='/images/02_animation_servertower.svg'
                altImge='Server tower animation'
                extraClass='yellow'
            />
            <Divider text='Leistungen' id='leistungen' />
            <ServicesSection />
            <ImageDivider
                srcImage='/images/03_animation_serverlights.svg'
                altImge='Server lights animation'
                extraClass='red'
            />
            <Divider text='Unsere Partner' id='unsere-partners' />
            <PartnersSection />
        </>
    )
}

export default Home
