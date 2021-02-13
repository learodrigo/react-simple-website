import { Link } from 'react-router-dom'

import { Wrapper } from './NotFound.styles'

const NotFound = () => {
    return (
        <Wrapper className='container'>
            <img src='./images/giphy.gif' alt='Denver Futurama' />
            <div>
                <h1 className='font-mono'>Error 404: Page not found</h1>
                <h3 className='font-mono'>Sorry, looks like what you try to search doesn't exist :(</h3>
                <p className='font-mono'>But hey, why not trying <Link to='/'>go back home</Link> instead?</p>
            </div>
        </Wrapper>
    )
}

export default NotFound
