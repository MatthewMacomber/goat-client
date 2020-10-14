import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './contexts/UserContext'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <UserProvider>
      <App />
    </UserProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
