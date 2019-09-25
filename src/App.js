import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Name from './Name';
import Age from './Age';
import Hobbies from './Hobbies';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hobbies: ['books', 'games', 'routing']
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/name'>Name</Link>
            <Link to='/age'>Age</Link>
            <Link to='/hobbies'>Hobbies</Link>
          </div>
          <Switch>
            <Route exact path='/' render={() => <Welcome welcome='Hello World!' />} />
            <Route path='/name' render={() => <Name name='JH' />} />
            <Route path='/age' render={() => <Age age='25' />} />
            <Route path='/hobbies' render={() => <Hobbies hobbies={this.state.hobbies} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
