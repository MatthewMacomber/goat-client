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
  

  handleGoalCreateSuccess = (id) => {
    const {history} = this.props;
    // history.push(`/goal/${id}`)
    // Change this later
    history.push(`/dashboard`)
  }

  render() {
    return (
      <Section className='GoalCreatePage'>
        <h2>Create Goal</h2>
        <GoalCreateForm
          onGoalCreateSuccess={this.handleGoalCreateSuccess}
        />
      </Section>
    )
  }
}