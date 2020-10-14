import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../src/routes/LandingPage/LandingPage'
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
      return (
    <div className="App">
      <Route exact path = '/' component = {LandingPage}/>
    </div>
  );
}

export default App;
