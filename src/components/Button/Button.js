import { Link } from 'react-router-dom'

import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? STYLES[0] : buttonStyle
    const checkButtonSize = SIZES.includes(buttonSize) ? STYLES[0] : buttonSize

    return (
        <Link to='/' className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                { children }
            </button>
        </Link>
    )
}

export default Button
