import React, { useState, useContext } from 'react';
import GoalContext from '../../contexts/GoalContext';
import Accordion from '../../components/Accordion/accordion';
import RedemptionPopUp from '../../components/RedemptionPopUp/RedemptionPopUp';
import './DashboardRoute.css'

const DashboardRoute = (props) => {

  const goals = useContext(GoalContext);
  const [completingGoal, setCompletingGoal] = useState(null);

  const handleClickCreate = () => {
    const {history} = props;
    history.push(`/create-goal`)
  };

  const handleRewardList = () => {
    const {history} = props;
    history.push(`/rewards-list`)
  };

  const handleArchivedGoals = () => {
    const {history} = props;
    history.push(`archived-goals`)
  };

  const completeGoal = () => {
    goals.modifyGoal({id: completingGoal.id, complete: true, archive: true})
    .then(() => {
      goals.setError('');
      setCompletingGoal(null);
      cancelPopUp();
    })
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

  const setIncomplete = (goal) => {
    goals.modifyGoal({id: goal.id, archive: true});
  }

  const renderGoalsPage = () => {
    return (
      <div className='goalControl'>
        <Accordion goals={goals.goals.filter(goal => !goal.complete && !goal.archive)} onCompleteClicked={setCompletingGoal} onIncompleteClicked={setIncomplete}/>
        <div className='dashButtons'>
          <button onClick={() => handleClickCreate()}>Create New Goal</button>
          <button onClick={() => handleRewardList()}>View Rewards</button>
          <button onClick={() => handleArchivedGoals()}>View Archived Goals</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>
        My Goals
      </h2>
      {goals.error && <p>{goals.error}</p>}
      {completingGoal && renderCompletePopUp()}
      {!completingGoal && renderGoalsPage()}
    </div>
  );
  
}

export default DashboardRoute;
