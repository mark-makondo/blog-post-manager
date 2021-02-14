import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css
import './dist/css/style.css';
import './fonts/stylesheet.css';

//pages
import {LoginPageContainer} from './pages/login-page/login-page_container.js';
import {DashboardContainer} from './pages/dashboard/dashboard_container.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={LoginPageContainer}/>
            <Route path='/dashboard' component={DashboardContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
