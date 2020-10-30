import React from 'react';
import ReactDOM from 'react-dom';
import PointsTracker from './PointsTracker';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><PointsTracker /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})