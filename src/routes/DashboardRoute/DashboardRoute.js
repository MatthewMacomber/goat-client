import React, { useState, useContext, useEffect } from 'react';
import GoalContext from '../../contexts/GoalContext';
import Accordion from '../../components/Accordion/accordion';
import RedemptionPopUp from '../../components/RedemptionPopUp/RedemptionPopUp';
import GoalService from '../../services/goalsAPIservice';

const DashboardRoute = (props) => {

  const goals = useContext(GoalContext);
  // console.log("DashboardRoute -> goals", goals.value)
  const [error, setError] = useState(null);
  //const [goals, setGoals] = useState([]);
  const [completingGoal, setCompletingGoal] = useState(null);

  /*useEffect(() => {
    GoalService.getGoal()
    .then(goals => {
      setGoals(goals);
    })
    .catch(setError);
  },[])*/

  const handleClickCreate = () => {
    const {history} = props;
    history.push(`/create-goal`)
  };

  const handleRewardList = () => {
    const {history} = props;
    history.push(`/rewards-list`)
  };

  const completeGoal = (goal) => {
    goals.modifyGoal({id: goal.id, complete: true})
    .then(() => {
      setError('');
      cancelPopUp();
    })
    .catch(res => setError(res));
  };

  const cancelPopUp = () => {
    setCompletingGoal(null);
  }

  const renderCompletePopUp = () => {
    return <RedemptionPopUp 
            question={`Complete ${completingGoal.title}?`}
            points={completingGoal.points}
            yesFunction={completeGoal}
            noFunction={cancelPopUp}/>
  }

  const renderGoalsPage = () => {
    return (
      <div>
        {error && <p>{error}</p>}
        <Accordion items={goals.goals} onClick={setCompletingGoal}/>
        <button onClick={() => handleClickCreate()}>Create New Goal</button>
        <button onClick={() => handleRewardList()}>View Rewards</button>
      </div>
    )
  }

  return (
    <div>
      <h2>
        My Goals
      </h2>
      {error && <p>{error}</p>}
      {completingGoal && renderCompletePopUp()}
      {!completingGoal && renderGoalsPage()}
      {goals.goals.length !== 0 ? <Accordion goals={goals.goals}/> : null}
      <button onClick={() => handleClickCreate()}>Create New Goal</button>
      <button onClick={() => handleRewardList()}>View Rewards</button>
    </div>
  );
  
}

export default DashboardRoute;
