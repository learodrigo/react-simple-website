import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import DataPrivacy from "./components/pages/DataPrivacy";
import Home from './components/pages/Home'
import Impressum from './components/pages/Impressum'
import UeberUns from './components/pages/UeberUns'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Link to='/'>
                    <h1 className='top-logo font-sans'>IT consultant</h1>
                </Link>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/ueber-uns" exact component={UeberUns} />
                    <Route path="/impressum" exact component={Impressum} />
                    <Route path="/datenschutz" exact component={DataPrivacy} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
