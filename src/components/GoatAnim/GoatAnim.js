import React, {Component} from 'react';
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

  setCurrent(amount) {
    this.setState({current: amount});
  }

  render() {

    let max = (this.state.max - this.state.current);
    let currentPercent = (this.state.current / this.state.max * 100);
    let maxPercent = (100 - currentPercent);

    return (
      <div>
        <div className='goatAnimBar'>
          <div className='cliffSection current' style={{'width': currentPercent + '%'}}></div>
          <div id='left' className='cliffSection left' style={{'width': maxPercent + '%'}}><p>0{max} Points left</p></div>
        </div>
      </div>
    )
  }
}