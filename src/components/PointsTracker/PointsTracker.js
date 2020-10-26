import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import './PointTracker.css';

export default class PointTracker extends Component {
  static contextType = UserContext;

  render() {
    const {points} = this.context.user;
    return (
        <p>Points: {points}</p>
    );
  };
};