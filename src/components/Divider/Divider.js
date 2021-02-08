import './Divider.css'

// import { Link } from 'react-router-dom'

const Divider = ({ text, id = null }) => {
    return (
        <div className="divider">
            <a className="divider-text font-mono" name={id}>{text}</a>
        </div>
    )
}

export default Divider
