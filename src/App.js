import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import SupperModal from './modals/Support/Support'

import DataPrivacy from './pages/DataPrivacy/DataPrivacy'
import Home from './pages/Home/Home'
import Impressum from './pages/Impressum/Impressum'
import NotFound from './pages/NotFound/NotFound'
import UeberUns from './pages/UeberUns/UeberUns'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    return (
        <div className='App'>
            <Router>
                <ScrollToTop />

                <Link to='/'>
                    <h1 className='top-logo font-sans'>IT consultant</h1>
                </Link>

                <NavBar />

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/ueber-uns' exact component={UeberUns} />
                    <Route path='/impressum' exact component={Impressum} />
                    <Route path='/datenschutz' exact component={DataPrivacy} />
                    <Route path='/modal' exact component={SupperModal} />
                    <Route path='/404' component={NotFound} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
