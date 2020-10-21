import React, {Component} from 'react';
import RewardListForm from '../../components/RewardListForm/RewardListForm';
import './RewardListRoute.css';



export default class RewardListRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  
  handleClickCreate = () => {
    const {history} = this.props;
    history.push(`/create-reward`)
  };

  render() {
    return (
      <div>
        <RewardListForm></RewardListForm>
        <button onClick={() => this.handleClickCreate()}>Create New Reward</button>

      </div>
    )
  }
}