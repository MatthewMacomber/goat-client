import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import './GoatAnim.css';

export default class GoatAnim extends Component {
  constructor() {
    super();
    this.state = {
      max: 1000,
      current: 300,
    };

    this.setCurrent = this.setCurrent.bind(this);
  }

  static contextType = UserContext;

  componentDidMount() {
    // pulls point data from context.
    const {points = 300, point_goal = 1000} = this.context;
    this.updatePoints(point_goal, points);
  }

  setCurrent = (amount) => {
    this.setState({current: amount});
  }

  updateMax = (value) => {
    this.setState({max: value});
  }

  updateCurrent = (value) => {
    this.setState({current: value});
  }

  updatePoints = (val1, val2) => {
    this.updateMax(val1);
    this.updateCurrent(val2);
  }

  render() {

    let max = (this.state.max - this.state.current);
    let currentPercent = (this.state.current / this.state.max * 100);
    let maxPercent = (100 - currentPercent);
    // TODO Needs cliff svg added as background. Needs better art in general.
    return (
      <div className='sidebar'>
        <div className='goatAnimBar'>
          <div id='left' className='cliffSection left' style={{'height': maxPercent + '%'}}><p>{max} Points left</p></div>
          <div className='goatImage'><img src={require('./goathead.svg')} width='100vw' alt='Goat head' /></div>
          <div className='cliffSection current' style={{'height': currentPercent + '%'}}></div>
        </div>
      </div>
    )
  }
}