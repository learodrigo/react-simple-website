import { Wrapper } from './Divider.styles'

const Divider = ({ text, id = null }) => {
    return (
        <Wrapper>
            <p className="divider-text font-mono" id={id} name={id}>{text}</p>
        </Wrapper>
    )
}

export default Divider
