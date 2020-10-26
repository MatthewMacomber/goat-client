import React from 'react';
import './accordion.css';

export default class Accordion extends React.Component {
    
  state = {
      selectedId : null,
  }

  populate = (goals) => {
    let html = [];
    if (!goals) {
      return html;
    }
    for(let goal of goals){
      if(goal.id === this.state.selectedId){
        const expired = new Date(goal.end_date).getTime() < new Date().getTime();
          html.push(
            <div key = {goal.id} className={`goalCard ${expired ? 'expiredGoal' : ''}`}>
              <button onClick={() => {this.setState({selectedId : null})}}>{goal.title}</button>
                <p>{goal.description}</p>
                <p>{goal.points}</p>
                <p>{new Date(goal.end_date).toLocaleDateString("en-US")}</p>
                <p>{goal.complete}</p>
                {expired && <p>This goal has expired. Would you like to mark this as completed or not completed?</p>}
                <button onClick={() => this.props.onCompleteClicked(goal)}>Completed</button>
                {expired && <button onClick={() => this.props.onIncompleteClicked(goal)}>Not Completed</button>}
            </div>
          )
      } else {
        html.push(
          <div key = {goal.id}>
            <button onClick={() => {this.setState({selectedId : goal.id})}}>{goal.title}</button>
          </div>
        )
      }
    }
    return html;
  }

  render = () => {
    return(
      <ul className='accordionList'>
        {this.populate(this.props.goals)}
      </ul>
    )
  }
}

