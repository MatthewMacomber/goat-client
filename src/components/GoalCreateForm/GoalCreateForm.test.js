import React from 'react';
import ReactDOM from 'react-dom';
import GoalCreateForm from './GoalCreateForm';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><GoalCreateForm /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})