import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export default App
