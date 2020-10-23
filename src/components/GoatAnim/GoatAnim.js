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
    const {points, point_goal} = this.context;
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

  updatePoints = () => {
    this.updateMax();
    this.updateCurrent();
  }

  render() {

    let max = (this.state.max - this.state.current);
    let currentPercent = (this.state.current / this.state.max * 100);
    let maxPercent = (100 - currentPercent);

    return (
      <div>
        <div className='goatAnimBar'>
          <div id='left' className='cliffSection left' style={{'width': maxPercent + '%'}}><p>{max} Points left</p></div>
          <div className='goatImage'><img src='./goathead.svg' width='50px' alt='Goat head' /></div>
          <div className='cliffSection current' style={{'width': currentPercent + '%'}}></div>
        </div>
      </div>
    )
  }
}