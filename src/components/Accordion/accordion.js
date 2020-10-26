import React from 'react';
import GoalContext from '../../contexts/GoalContext';
import './accordion.css';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    console.log("Accordion -> constructor -> props", props)
    this.state = {
      selectedId : null,
      goals : this.props.goals
    }
  }

  selectedId = null;

  populate = (goals) => {
    let html = [];
    if (!goals) {
      return html;
    }
    for(let goal of goals){
      if(goal.id === this.state.selectedId){
        if(new Date(goal.end_date).getTime() < new Date().getTime()){
          html.push(
            <div key = {goal.id} className='goalCard'>
              <div className='goalList' onClick={() => {
                this.setState({selectedId : goal.id})
                // console.log(this.state)
              }}>{goal.title}</div>
              <div className='expiredGoal'>
                <p>{goal.description}</p>
                <p>{goal.points}</p>
                <p>{new Date(goal.end_date).toLocaleDateString("en-US")}</p>
                <p>{goal.complete}</p>
                <p className='expireMessage'>This goal has expired. Would you like to mark this as completed or not completed?</p>
                <button onClick={() => this.props.onCompleteClicked(goal)}>Completed</button>
                <button onClick={() => this.props.onIncompleteClicked(goal)}>Not Completed</button>
              </div>
            </div>
          )
        } else {
          html.push(
            <div key = {goal.id} className='goalCard'>
              <div className='goalList' onClick={() => {
                this.setState({selectedId : goal.id})
                // console.log(this.state)
              }}>{goal.title}</div>
              <div className='notExpiredGoal'>
                <p>{goal.description}</p>
                <p>{goal.points}</p>
                <p>{new Date(goal.end_date).toLocaleDateString("en-US")}</p>
                <p>{goal.complete}</p>
                <p>This goal is in progress. Would you like to make it as completed?</p>
                <button onClick={() => this.props.onCompleteClicked(goal)}>Completed</button>
              </div>
            </div>
          )
        }
      } else {
        html.push(
          <div key = {goal.id} className='AccordionFrame'>
            <div className='AccordionCard chevDown' onClick={() => {
              this.setState({selectedId : goal.id})
            }}>{goal.title}</div>
          </div>
        )
      }
    }
    return html;
  }

  render = () => {
    return(
      <div className='accordionList'>
        {this.populate(this.state.goals)}
      </div>
    )
  }
}

