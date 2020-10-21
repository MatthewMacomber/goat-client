import React, {Component} from 'react';
import RewardListForm from '../../components/RewardListForm/RewardListForm';
import './RewardListRoute.css';



export default class RewardListRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  

  render() {
    return (
     <div>
       <RewardListForm></RewardListForm>
     </div>
    )
  }
}