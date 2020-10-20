import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Accordion from './accordion'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><Accordion /></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})