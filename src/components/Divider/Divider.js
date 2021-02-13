import { Wrapper } from './Divider.styles'

const Divider = ({ text, id = null }) => {
    return (
        <Wrapper id={id} name={id}>
            <p className="divider-text font-mono">{text}</p>
        </Wrapper>
    )
}

export default Divider
