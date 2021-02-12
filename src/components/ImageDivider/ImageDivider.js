import { Wrapper } from './ImageDivider.styles'

const ImageDivider = ({ srcImage, altImge, extraClass = '' }) => {
    return (
        <Wrapper className={extraClass}>
            <div className={`image-divider__image-container ${extraClass}`}>
                <img
                    className='image-divider__img'
                    src={srcImage}
                    alt={altImge}
                />
            </div>
        </Wrapper>
    )
}

export default ImageDivider
