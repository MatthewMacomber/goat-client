import React, {Component} from 'react';
import GoalContext from '../../contexts/GoalContext';
import {Label, Input, Button} from '../Utils/Utils';
import './GoalCreateForm.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default class GoalCreateForm extends Component {
  static defaultProps = {
    onGoalCreateSuccess: () => {}
  }

  state = {
    date: new Date(),
  };

  onChange = date => this.setState({ date });

  static contextType = GoalContext;

  handleSubmitGoal = ev => {
    // Submit the goal. Set up once goal api service is ready.
    ev.preventDefault();
    const {goal_title, goal_desc, goal_points} = ev.target;
    this.context.addGoal({
      title: goal_title.value,
      description: goal_desc.value,
      points: goal_points.value,
      end_date: this.state.date,
      archive: false,
    })
      .then(() => {
        this.props.onGoalCreateSuccess();
      })
      .catch(res => {
        this.context.setError(res);
      })  
  }

  render() {
    const {error} = this.context;
    console.log(error);
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
          <div >
            <Label htmlFor='goal-end-date-input'>
              End Date:
            </Label> 
            <div className='endDateCalendar'>
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                required
              />
            </div>
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