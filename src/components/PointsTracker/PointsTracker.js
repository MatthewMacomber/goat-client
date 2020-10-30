import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import './PointsTracker.css';

export default class PointTracker extends Component {
  static contextType = UserContext;

  render() {
    return (
        <p className='points-tracker'>Points: {points}</p>
    );
  };
};