import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({
    children,
    onClick,
    buttonStyle
}) => {
    return (
        <Link to='/' className="btn-mobile">
            <button
                className={`btn font-mono ${buttonStyle}`}
                onClick={onClick}
                type='button'
            >
                { children }
            </button>
        </Link>
    )
}

export default Button
