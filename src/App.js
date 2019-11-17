import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Main from 'Views/Main';
import About from 'Views/About';

const App = ({ history }) => {
  return (
    <div className="app-container">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route
            path="/*"
            component={() => <h1 style={{ color: 'red' }}>NOT FOUND!!!</h1>}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
