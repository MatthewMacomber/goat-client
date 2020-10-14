import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
// import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Switch>
            <Route
              exact path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationRoute}
            />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
    </div>
  );
}

export default App;