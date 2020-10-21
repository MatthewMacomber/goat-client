import React, { Component } from 'react';
import GoalService from '../services/goalsAPIservice';

const GoalContext = React.createContext({
  goals: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  loadGoals: () => {},
  addGoal: () => {},
  modifyGoal: () => {}
});

export default GoalContext;

export class GoalProvider extends Component {
  constructor(props) {
    super(props);
    const state = {goals: [], error: null};
    this.state = state;
  };

  setError = (error) => {
    console.log(error);
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  loadGoals = () => {
    // Load goals into context.
    GoalService.getGoal()
      .then(goals => {
        this.setState({goals});
      })
      .catch(this.setError);
  };

  addGoal = (goal) => {
    // Add new goal to context after succesful submission to server.
    this.setState({goals: this.state.goals.concat(goal)});
  };

  modifyGoal = (id, option) => {
    // Modify goal, specifically for completeing or archiving goals.
    if (option === 'complete') {
      // Change goal with id to complete, server call with goal to complete.
      GoalService.modifyGoal({id, option})
        .then(res => {
          let modGoals = this.state.goals;
          modGoals[id].complete = true;
          this.setState({goals: modGoals});
        })
        .catch(this.setError);
    } else if (option === 'archive') {
      // Change goal with id to archived, server call with goal to archive.
      GoalService.modifyGoal({id, option})
        .then(res => {
          let modGoals = this.state.goals;
          modGoals[id].archived = true;
          this.setState({goals: modGoals})
        })
        .catch(this.setError);
    } else {
      this.setError({error: 'Incorrect option for modify goal'});
    }
  };

  render() {
    const value = {
      goals: this.state.goals,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      loadGoals: this.loadGoals,
      addGoal: this.addGoal,
      modifyGoal: this.modifyGoal
    }

    return (
      <GoalContext.Provider value={value}>
        {this.props.children}
      </GoalContext.Provider>
    )
  }
}