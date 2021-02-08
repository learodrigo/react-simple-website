import './ImageDivider.css'

const ImageDivider = ({ srcImage, altImge, extraClass = '' }) => {
    return (
        <div className={`image-divider__container ${extraClass}`}>
            <div className={`image-divider__image-container ${extraClass}`}>
                <img
                    className={`image-divider__img ${extraClass}`}
                    src={srcImage}
                    alt={altImge}
                />
            </div>
        </div>
    )
}

export default ImageDivider
