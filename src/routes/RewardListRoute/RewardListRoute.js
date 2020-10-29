import React, {Component} from 'react';
import RewardListForm from '../../components/RewardListForm/RewardListForm';
import './RewardListRoute.css';
import UserContext from '../../contexts/UserContext';


export default class RewardListRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  static contextType = UserContext;
  
  handleClickCreate = () => {
    const {history} = this.props;
    history.push(`/create-reward`)
  };

  render() {
    return (
      <div>
        <RewardListForm userContext={this.context} create={this.handleClickCreate}></RewardListForm>
      </div>
    )
  }
}