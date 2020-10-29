import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import './PointsTracker.css';

export default class PointTracker extends Component {
  static contextType = UserContext;

  render() {
    return (
        <p>Points: {this.context.points || 0}</p>
    );
  };
};