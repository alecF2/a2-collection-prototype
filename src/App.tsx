import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Collection from './pages/Collection'
import CreateItems from './pages/CreateItems'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add_items">
          <CreateItems />
        </Route>
        <Route path="/add_collection">
          <Collection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
