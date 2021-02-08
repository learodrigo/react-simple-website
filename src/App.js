import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home'
import UeberUns from './components/pages/UeberUns'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <h1>IT consultant</h1>
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ueber-uns" exact component={UeberUns} />
            </Switch>
        </Router>
    </div>
  )
}

export default App
