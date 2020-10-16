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
    const {title, description, points, complete, end_date, archive} = ev.target;
    GoalsApiService.addGoal({
      title: title.value,
      description: description.value,
      points: points.value,
      complete: complete.value,
      user_id: this.context.user_id,
      end_date: end_date.value,
      archive: archive.value,
    })
      .then(goal => {
        title.value = '';
        description.value = '';
        points.value = '';
        complete.value = '';
        end_date.value = '';
        archive.value = '';
        this.props.onGoalCreateSuccess(goal.id); // TODO make sure this is the correct format of returned data.
      })
      .catch(res => {
        this.setState({ error: res.error })
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
            <Label htmlFor='goal-name-input'>
              Goal:
            </Label>
            <Input
              id='goal-name-input'
              name='goal-name'
              required
            />
          </div>
          <div>
            <Label htmlFor='goal-desc-input'>
              Description:
            </Label>
            <Input
              id='goal-desc-input'
              name='goal-desc'
              required
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