import React from 'react';
import UserContext from '../../contexts/UserContext';

export default class RedemptionPopUp extends React.Component {

  static contextType = UserContext;

  modifyPoints = () => {
    this.context.modifyPoints(this.props.points)
    .then(() => {
      this.props.yesFunction();
    })
    .catch(e => this.context.setError(e));
  }

  render() {
    return (
      <div>
        {this.context.error && <p>{this.context.error}</p>}
        <p>{this.props.question}</p>
        <button onClick={() => this.modifyPoints()}>Yes</button>
        <button onClick={() => this.props.noFunction()}>No</button>
      </div>
    )
  }
}