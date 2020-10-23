import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import ArchivedGoalsRoute from './ArchivedGoalsRoute';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><ArchivedGoalsRoute /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
