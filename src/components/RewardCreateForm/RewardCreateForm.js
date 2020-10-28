import React, {Component} from 'react';
import RewardContext from '../../contexts/RewardContext';
import {Label, Input, Button} from '../Utils/Utils';

export default class RewardCreateForm extends Component {

  static defaultProps = {onRewardCreateSuccess: () => {}};

  static contextType = RewardContext;

  handleSubmitReward = ev => {
    // Submit the reward. Set up once reward api service is ready.
    ev.preventDefault();
    const {reward_title, reward_points, reward_description} = ev.target;
    this.context.addReward({
      title: reward_title.value,
      description: reward_description.value,
      points: reward_points.value,
    })
    .then(() => {
      this.props.onRewardCreateSuccess();
    });
  }

  render() {
    return (
      <>
        <div role='alert'>
          {this.context.error && <p className='red'>{this.context.error}</p>}
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
            <Label htmlFor='reward-title-description'>
              Description:
            </Label>
            <Input
              id='reward-title-description'
              name='reward_description'
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