import React, { useState, useEffect } from 'react';
// import './DashboardRoute.css';
// import ShipApiService from '../../Services/ship-api-service';
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
      {props.ships.map((ship) => {
        return (
          <div className="hangarDock" key={"ship-" + ship.id}>
            <Link to={`/hangar/${ship.id}`}>
              <div className="shipName">
                {ship.ship_name}
              </div>
            </Link>
          </div>
        );
      })}
      <button onClick={() => clickNewGoal()}>Create New Ship</button>
    </div>
  );
  
}

export default GoalListPage;
