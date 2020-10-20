import React, { useState, useContext } from 'react';
import GoalContext from '../../contexts/GoalContext';
import Accordion from '../../components/Accordion/accordion';

const DashboardRoute = (props) => {

  const goals = useContext(GoalContext);
  const [error, setError] = useState(0);

  const handleClickCreate = () => {
    const {history} = props;
    history.push(`/create-goal`)
  };

  const onClick = ((id, complete) => {
    goals.modifyGoal({id, complete: !complete})
    .then(() => setError(''))
    .catch(res => setError(res));
  });

  return (
    <div>
      <h2>
        My Goals
      </h2>
      {error && <p>{error}</p>}
      <Accordion goals={goals.goals} onClick={onClick}/>
      <button onClick={() => handleClickCreate()}>Create New Goal</button>
    </div>
  );
  
}

export default DashboardRoute;
