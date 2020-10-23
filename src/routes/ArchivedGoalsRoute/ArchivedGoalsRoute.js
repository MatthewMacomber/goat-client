import React from 'react';
import './ArchivedGoalsRoute.css';

export default class ArchivedGoals extends React.Component {
  goals = [
    {
        id: 1,
        title: 'make the bed',
        description: 'i will make my bed every day',
        points: 5,
        end_date: '2020-01-01',
        archive: true
    },
    {
        id: 2,
        title: 'take out trash',
        description: 'i will make my bed every day',
        points: 10,
        end_date: '2020-01-01',
        archive: false
    },
    {
        id: 3,
        title: 'mop the kitchen',
        description: 'i will make my bed every day',
        points: 8,
        end_date: '2020-01-01',
        archive: true
    }
  ]
  


  render(){
    const archivedGoals = this.goals.filter(goal => goal.archive)
    return(
      <div>
        <section className="goals-list-section">
        <ul className="goals-list">
        {archivedGoals.map(goal => (
          <li className="goals-list-options" key={goal.id}>
            <div>{goal.title}</div>
            <div>{goal.description}</div>
            <div>Points: {goal.points}</div>
            <div>Date completed: {goal.end_date}</div>
          </li>
        ))}
        </ul> 
        </section>
      </div>
    )
  }
}
























