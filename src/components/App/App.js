import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import GoatAnim from '../GoatAnim/GoatAnim';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import './App.css';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import GoalCreateRoute from '../../routes/GoalCreateRoute/GoalCreateRoute';
import RewardListRoute from '../../routes/RewardListRoute/RewardListRoute';
import RewardCreatePage from '../../routes/RewardCreatePage/RewardCreatePage';
import ArchivedGoalsRoute from '../../routes/ArchivedGoalsRoute/ArchivedGoalsRoute';
import {GoalProvider} from '../../contexts/GoalContext';
import {RewardProvider} from '../../contexts/RewardContext';

function App() {
  return (
    <div className="App">
      <GoatAnim />
      <Header />
      <main>
        <GoalProvider>
          <RewardProvider>
          <Switch>
            <PublicOnlyRoute
              exact path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginRoute}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationRoute}
            />
            <PrivateRoute
              path={'/dashboard'}
              component={DashboardRoute}
            />
            <PrivateRoute
              path={'/create-goal'}
              component={GoalCreateRoute}
            />
            <PrivateRoute
              path={'/rewards-list'}
              component={RewardListRoute}
            />
            <PrivateRoute
              path={'/create-reward'}
              component={RewardCreatePage}
            />
            <PrivateRoute
              path={'/archived-goals'}
              component={ArchivedGoalsRoute}
            />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
          </RewardProvider>
        </GoalProvider>
      </main>
    </div>
  );
}

export default App;