import React from 'react';
import GoalContext from '../../contexts/GoalContext';
import Accordion from '../../components/Accordion/accordion';
import RedemptionPopUp from '../../components/RedemptionPopUp/RedemptionPopUp';
import './DashboardRoute.css'

class DashboardRoute extends React.Component {

  static contextType = GoalContext;
  state = {
    completingGoal: null,
  }

  componentWillUnmount() {
    this.context.clearError();
  }

  setCompletingGoal = (completingGoal) => {
    this.setState({completingGoal});
  }

  handleClickCreate = () => {
    const {history} = this.props;
    history.push(`/create-goal`)
  };

  handleRewardList = () => {
    const {history} = this.props;
    history.push(`/rewards-list`)
  };

  handleArchivedGoals = () => {
    const {history} = this.props;
    history.push(`archived-goals`)
  };

  completeGoal = () => {
    const {completingGoal} = this.state;
    this.context.modifyGoal({id: completingGoal.id, complete: true, archive: true})
    .then(() => {
      this.setCompletingGoal(null);
      this.cancelPopUp();
    })
  };

  cancelPopUp = () => {
    this.setCompletingGoal(null);
  }

  renderCompletePopUp = () => {
    const {completingGoal} = this.state;
    return <RedemptionPopUp 
            question={`Complete ${completingGoal.title}?`}
            points={completingGoal.points}
            yesFunction={this.completeGoal}
            noFunction={this.cancelPopUp}/>
  }

  setIncomplete = (goal) => {
    this.context.modifyGoal({id: goal.id, archive: true});
  }

  renderGoalsPage = () => {
    return (
      <div className='goalControl'>
        <Accordion goals={this.context.goals.filter(goal => !goal.complete && !goal.archive)} onCompleteClicked={this.setCompletingGoal} onIncompleteClicked={this.setIncomplete}/>
        <div className='dashButtons'>
          <button onClick={() => this.handleClickCreate()}>Create New Goal</button>
          <button onClick={() => this.handleRewardList()}>View Rewards</button>
          <button onClick={() => this.handleArchivedGoals()}>View Archived Goals</button>
        </div>
      </div>
    )
  }

  render() {
    const {completingGoal} = this.state;
    return (
      <div>
        <h2>
          My Goals
        </h2>
        {this.context.error && <p>{this.context.error}</p>}
        {completingGoal && this.renderCompletePopUp()}
        {!completingGoal && this.renderGoalsPage()}
      </div>
    );
  }
}

export default DashboardRoute;
