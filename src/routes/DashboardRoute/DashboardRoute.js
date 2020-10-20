import React, { useState } from 'react';
import GoalsContext from '../../contexts/GoalsContext';
import Accordion from '../../components/Accordion/accordion';

const DashboardRoute = (props) => {

  const goals = useContext(GoalsContext);
  const [error, setError] = useState(0);

  const handleClickCreate = () => {
    const {history} = props;
    history.push(`/create-goal`)
  };

  onClick((id, complete) => {
    goals.modifyGoal({id, complete: !complete})
    .then(() => setError(''))
    .catch(res => setError(e));
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
