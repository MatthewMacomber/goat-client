import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { GoalProvider } from './contexts/GoalContext';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
          <GoalProvider>
            <App />
          </GoalProvider>
        </UserProvider>
    </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
