import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import GoalCreateForm from '../../components/GoalCreateForm/GoalCreateForm';
import './GoalCreateRoute.css';

export default class GoalCreateRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  

  handleGoalCreateSuccess = () => {
    const {history} = this.props;
    history.push(`/dashboard`)
  }


  render() {
    return (
      <div>
        <Section className='GoalCreatePage'>
        <h2>Create Goal</h2>
        <GoalCreateForm
          onGoalCreateSuccess={this.handleGoalCreateSuccess}
        />
      </Section>
      </div>
    )
  }
}

