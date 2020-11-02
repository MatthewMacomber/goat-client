import React from 'react';
import './accordion.css';

export default class Accordion extends React.Component {
    
  state = {
      selectedId : null,
  }

  populate = (goals) => {
    let html = [];
    if (!goals) {
      html.push(
        <div>
          <p>
            No goals yet! Create a goal to get started.
          </p>
        </div>
      )
      return html;
    }
    for(let goal of goals){
      const expired = new Date(goal.end_date).getTime() < new Date().getTime();
      if(goal.id === this.state.selectedId){
          html.push(
            <div key = {goal.id} className={`goalCard ${expired ? 'expiredGoal' : 'notExpiredGoal'}`}>
              <button className='goalList' onClick={() => {this.setState({selectedId : null})}}>{goal.title}</button>
                <div>
                  <p>{goal.description}</p>
                  <p>Value: {goal.points}</p>
                  <p>{new Date(goal.end_date).toLocaleDateString("en-US")}</p>
                  <p>{goal.complete}</p>
                  {expired && <p className='expireMessage'>This goal has expired. Would you like to mark this as completed or not completed?</p>}
                  {!expired && <p>Would you like to mark this as completed?</p>}
                  <button onClick={() => this.props.onCompleteClicked(goal)}>Completed</button>
                  {expired && <button onClick={() => this.props.onIncompleteClicked(goal)}>Not Completed</button>}
                </div>
            </div>
          )
      } else {
        html.push(
          <div key = {goal.id} className='AccordionFrame'>
            <button className={`AccordionCard ${expired ? 'expireMessage' : ''}`} onClick={() => {this.setState({selectedId : goal.id})}}>{goal.title}</button>
          </div>
        )
      }
    }
    return html;
  }

  render = () => {
    return(
      <div className='accordionList'>
        {this.populate(this.props.goals)}
      </div>
    )
  }
}

