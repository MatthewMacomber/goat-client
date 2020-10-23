import React from 'react';
import UserContext from '../../contexts/UserContext';

export default class RedemptionPopUp extends React.Component {

  context = UserContext;
  state = {error: null};

  setError = (error) => {
    this.setState({error});
  }

  modifyPoints = () => {
    this.context.modifyPoints(this.props.points)
    .then(() => {
      this.props.yesFunction();
    })
    .catch(e => this.setError(e));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <p>{this.props.question}</p>
        <button onClick={() => this.modifyPoints()}>Yes</button>
        <button onClick={() => this.props.noFunction()}>No</button>
      </div>
    )
  }
}