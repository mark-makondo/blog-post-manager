import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// css
import './dist/css/style.css';
import './fonts/stylesheet.css';

//pages
import LoginPageContainer from './pages/login-page/LoginPageContainer.js';
import DashboardContainer from './pages/dashboard/DashboardContainer.js';

//component
import AdminLoginContainer from './components/admin-login/AdminLoginContainer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LoginPageContainer}/>
          <Route path='/admin-login' component={AdminLoginContainer}/>
          <Route path='/dashboard/:id' component={DashboardContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
