import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import './PointsTracker.css';

export default class PointTracker extends Component {
  static contextType = UserContext;

  render() {
    const points = this.context.points || 0;
    return (
        <p className='points-tracker'>Points: {points}</p>
    );
  };
};