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
    })
    .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearError();
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
          <div className='form-row'>
            <Label htmlFor='reward-title-input'>
              Reward:
            </Label><br/>
            <Input
              id='reward-title-input'
              name='reward_title'
              required
            />
          </div>
          <div className='form-row'>
            <Label htmlFor='reward-title-description'>
              Description:
            </Label><br/>
            <Input
              id='reward-title-description'
              name='reward_description'
            />
          </div>
          <div className='form-row'>
            <Label htmlFor='reward-points-input'>
              Points to redeem:
            </Label><br/>
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