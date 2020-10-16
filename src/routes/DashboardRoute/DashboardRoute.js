import React, { useState, useEffect } from 'react';
// import './DashboardRoute.css';
import { Link } from 'react-router-dom';
import GoalApiService from '../../services/goalsAPIservice'

const GoalListPage = (props) => {
  const [goals, setGoals] = useState([])

  const clickNewGoal = () => {
    // Update this to match new API

    GoalApiService.addGoal()
      .then(newGoal => {
        const newGoals = goals.slice();

        newGoals.push(newGoal)
        setGoals(newGoals)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    // Update this to match new API

    GoalApiService.getGoal()
      .then(goals => {
        setGoals(goals);
      })
  },[setGoals])

  return (
    <div>
      <h1>
        My Goals
      </h1>
      {goals.map((goal) => {
        return (
          <div className="goalList" key={"goal-" + goal.id}>
            <Link to={`/goal/${goal.id}`}>
              <div className="goalTitle">
                {goal.title}
              </div>
            </Link>
          </div>
        );
      })}
      <button onClick={() => clickNewGoal()}>Create New Goal</button>
    </div>
  );
  
}

export default GoalListPage;
