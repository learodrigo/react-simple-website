import { Wrapper } from './Button.styles'

const Button = ({
    children,
    onClick,
    buttonStyle
}) => {
    return (
        <Wrapper>
            <button
                className={`btn font-mono ${buttonStyle}`}
                onClick={onClick}
                type='button'
            >
                { children }
            </button>
        </Wrapper>
    )
}

export default Button
