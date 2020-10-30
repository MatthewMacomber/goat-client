import React from 'react';
import ReactDOM from 'react-dom';
import GoalCreateRoute from './GoalCreateRoute';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><GoalCreateRoute /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})