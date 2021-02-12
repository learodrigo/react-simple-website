import { Wrapper } from './Button.styles'

const Button = ({
    children,
    onClick,
    buttonStyle
}) => {
    return (
        <Wrapper className='btn-mobile'>
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
