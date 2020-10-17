import React, { useState, useEffect } from 'react';
// import './DashboardRoute.css';
import { Link } from 'react-router-dom';
import GoalApiService from '../../services/goalsAPIservice'

const GoalListPage = (props) => {
  const [goals, setGoals] = useState([])

  const handleClickCreate = () => {
    const {history} = props;
    history.push(`/create-goal`)
  }

  useEffect(() => {

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
      <button onClick={() => handleClickCreate()}>Create New Goal</button>
    </div>
  );
  
}

export default GoalListPage;
