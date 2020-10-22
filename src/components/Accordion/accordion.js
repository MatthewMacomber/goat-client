import React from 'react';
import './accordion.css';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId : null,
      goals : this.props.goals
    }
  }

  selectedId = null;

  populate = (goals) => {
    let html = [];
    for(let goal of goals){
      if(goal.id === this.state.selectedId){
        if(new Date(goal.end_date).getTime() < new Date().getTime()){
          html.push(
            <div key = {goal.id} className='goalCard'>
              <button onClick={() => {
                this.setState({selectedId : goal.id})
                // console.log(this.state)
              }}>{goal.title}</button>
              <div className='expiredGoal'>
                <p>{goal.description}</p>
                <p>{goal.points}</p>
                <p>{new Date(goal.end_date).toLocaleDateString("en-US")}</p>
                <p>{goal.complete}</p>
              </div>
            </div>
          )
        } else {
          html.push(
            <div key = {goal.id} className='goalCard'>
              <button onClick={() => {
                this.setState({selectedId : goal.id})
                // console.log(this.state)
              }}>{goal.title}</button>
              <p>{goal.description}</p>
              <p>{goal.points}</p>
              <p>{new Date(goal.end_date).toLocaleDateString("en-US")}</p>
              <p>{goal.complete}</p>
            </div>
          )
        }
      } else {
      html.push(
        <div key = {goal.id}>
          <button onClick={() => {
            this.setState({selectedId : goal.id})
          }}>{goal.title}</button>
        </div>
      )
      }
    }
    return html;
  }

  render = () => {
    return(
      <ul className='accordionList'>
        {this.populate(this.state.goals)}
      </ul>
    )
  }
}

