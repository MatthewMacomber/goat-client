import React from 'react';
import ReactDOM from 'react-dom';
import RewardCreateForm from './RewardCreateForm';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><RewardCreateForm /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})