import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
        <h1>IT consultant</h1>
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    </div>
  )
}

export default App
