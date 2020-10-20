import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import GoalsApiService from '../../services/goalsAPIservice';
import {Label, Input, Button} from '../Utils/Utils';
import './GoalCreateForm.css';

export default class GoalCreateForm extends Component {
  static defaultProps = {
    onGoalCreateSuccess: () => {}
  }

  state = {error: null};

  static contextType = UserContext;

  handleSubmitGoal = ev => {
    // Submit the goal. Set up once goal api service is ready.
    ev.preventDefault();
    const {goal_title, goal_desc, goal_points, goal_end_date} = ev.target;
    GoalsApiService.addGoal({
      title: goal_title.value,
      description: goal_desc.value,
      points: goal_points.value,
      end_date: new Date(Date.now()).toUTCString(),
    })
      .then(goal => {
        goal_title.value = '';
        goal_desc.value = '';
        goal_points.value = '';
        goal_end_date.value = '';
        this.props.onGoalCreateSuccess(goal.id);
      })
      .catch(res => {
        this.setState({ error: res })
      })
    
  }

  render() {
    const {error} = this.state;
    return (
      <>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <form
          className='GoalCreateForm'
          onSubmit={this.handleSubmitGoal}
        >
          <div>
            <Label htmlFor='goal-title-input'>
              Goal:
            </Label>
            <Input
              id='goal-title-input'
              name='goal_title'
              required
            />
          </div>
          <div>
            <Label htmlFor='goal-desc-input'>
              Description:
            </Label>
            <Input
              id='goal-desc-input'
              name='goal_desc'
              required
            />
          </div>
          <div>
            <Label htmlFor='goal-points-input'>
              Points:
            </Label>
            <Input
              id='goal-points-input'
              name='goal_points'
              required
            />
          </div>
          <div>
            <Label htmlFor='goal-end-date-input'>
              End Date:
            </Label>
            <Input
              id='goal-end-date-input'
              name='goal_end_date'
              // required
            />
          </div>
          <footer>
            <Button type='submit' className='submit'>
              Create Goal
            </Button>
          </footer>
        </form>
      </>
    )
  }
}