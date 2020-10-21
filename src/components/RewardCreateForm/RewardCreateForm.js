import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
// import RewardsApiService from '../../services/rewardsAPIservice';
import {Label, Input, Button} from '../Utils/Utils';
import './RewardCreateForm.css';
import 'react-calendar/dist/Calendar.css';

export default class RewardCreateForm extends Component {
  static defaultProps = {
    onRewardCreateSuccess: () => {}
  }

  state = {
    error: null,
    date: new Date(),
  };

  onChange = date => this.setState({ date })

  static contextType = UserContext;

  handleSubmitReward = ev => {
    // Submit the reward. Set up once reward api service is ready.
    ev.preventDefault();
    const {reward_title, reward_points} = ev.target;
    // RewardsApiService.addReward({
    //   title: reward_title.value,
    //   points: reward_points.value,
    //   end_date: this.state.date,
    //   archive: false,
    // })
    //   .then(reward => {
    //     reward_title.value = '';
    //     reward_points.value = '';
    //     // reward_end_date.value = '';
    //     this.props.onRewardCreateSuccess(reward.id); // TODO make sure this is the correct format of returned data.
    //   })
    //   .catch(res => {
    //     this.setState({ error: res })
    //   })  
  }

  render() {
    const {error} = this.state;
    return (
      <>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <form
          className='rewardCreateForm'
          onSubmit={this.handleSubmitReward}
        >
          <div>
            <Label htmlFor='reward-title-input'>
              Reward:
            </Label>
            <Input
              id='reward-title-input'
              name='reward_title'
              required
            />
          </div>
          <div>
            <Label htmlFor='reward-points-input'>
              Points to redeem:
            </Label>
            <Input
              id='reward-points-input'
              name='reward_points'
              required
            />
          </div>
          <footer>
            <Button type='submit' className='submit'>
              Create
            </Button>
          </footer>
        </form>
      </>
    )
  }
}