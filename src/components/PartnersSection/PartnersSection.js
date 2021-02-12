import { Wrapper } from './PartnersSection.styles'

const images = [
    {
        img: '/images/partners/1-microsoft.png',
        alt: 'Support für Mac und Windows',
    },
    {
        img: '/images/partners/2-apple.png',
        alt: 'IT-Struktur und Sicherheit',
    },
    {
        img: '/images/partners/3-citrix.png',
        alt: 'Fernwartung',
    },
    {
        img: '/images/partners/4-kerio.png',
        alt: 'Client Verwaltung',
    },
    {
        img: '/images/partners/5-starface.png',
        alt: 'TK-Anlagen Support',
    },
    {
        img: '/images/partners/6-unify.png',
        alt: 'Communication as a service',
    }
]

const ServicesSection = () => {
    return (
        <Wrapper className='container'>
            <ul className='container__list'>
                {images.map((img, index) => (
                    <li key={index} className='list__item'>
                        <div className='item__image'>
                            <img src={img.img} alt={img.alt} />
                        </div>
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}

export default ServicesSection
