import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Main from 'Views/Main';

const App = ({ history, store }) => {
  return (
    <div className="app-container">
      <Router history={history} store={store}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/*" component={Main} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
