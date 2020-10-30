import React from 'react';
import ReactDOM from 'react-dom';
import GoatAnim from './GoatAnim';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><GoatAnim /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})