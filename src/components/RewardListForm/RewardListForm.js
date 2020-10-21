import React, {Component} from 'react';
import './RewardListForm.css';

 
export default class RewardListForm extends Component{
  rewards = [
    {
      id: 1,
      title: 'Ice cream',
      description:'',
      points: 20,
      redeemed: false
    },
    {
      id: 2,
      title: 'Video game break',
      description: 'Must earn 50 points to play three hours of video games',
      points: 50,
      redeemed: false
    },
    {
      id: 3,
      title: 'Throw a party',
      description: '',
      points: 200,
      redeemed: false
    },
  ];
   

  
  render(){
    return(
      <div>
        <section className="rewards-list-section">
        <ul className="rewards-list">
        {this.rewards.map(reward => (
          <li className="rewards-list-options" key={reward.id}>
            <div>Reward: {reward.title}</div>
            <div>{reward.description}</div>
            <div>Points needed to redeem: {reward.points}</div>
            <div>{reward.redeemed}</div>
            <button>Redeem Reward</button>
          </li>
        ))}
        </ul> 
        </section>
      </div>
    )
  }
}
