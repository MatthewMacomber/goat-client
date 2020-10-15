import React, {Component} from 'react';
//import GoalContext from '../../contexts/GoalContext';
import {Label, Input, Button} from '../Utils/Utils';
import './GoalCreateForm.css';

export default class GoalCreateForm extends Component {
  static defaultProps = {
    onGoalCreateSuccess: () => {}
  }

  state = {error: null};

  //static contextType = GoalContext;

  handleSubmitGoal = ev => {
    // Submit the goal. Set up once goal api service is ready.
    // this.props.onGoalCreateSuccess(id);
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