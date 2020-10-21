import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import './PointTracker.css';

export default class PointTracker extends Component {
  static contextType = UserContext;

  render() {
    const {points} = this.context;
    return (
      <div>
        <p>Goat Points: {points}</p>
      </div>
    )
  }
}