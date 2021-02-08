import './ServicesSection.css'

const items = [
    {
        img: '/images/services/01-support.svg',
        title: 'Support für Mac und Windows',
        desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
    },
    {
        img: '/images/services/02-hosting.svg',
        title: 'IT-Struktur und Sicherheit',
        desc: 'Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
        img: '/images/services/03-starface-support.svg',
        title: 'Fernwartung',
        desc: 'Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    },
    {
        img: '/images/services/04-communication-as-a-service.svg',
        title: 'Client Verwaltung',
        desc: 'Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
    },
    {
        img: '/images/services/05-it-struktur-sicherheit.svg',
        title: 'TK-Anlagen Support',
        desc: 'Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
    },
    {
        img: '/images/services/06-events.svg',
        title: 'Communication as a service',
        desc: 'Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
    }
]

const ServicesSection = () => {
    return (
        <div className="services-section__container container">
            <ul className='container__list'>
                {items.map((item, index) => (
                    <li key={index} className='list__item'>
                        <div className='item__image'>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <h3 className='font-mono'>{item.title}</h3>
                        <p className='font-mono'>{item.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesSection
