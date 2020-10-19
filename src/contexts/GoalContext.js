import React, { Component } from 'react';

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
    // load goals into context.
  };

  addGoal = () => {
    // Add new goal to context after succesful submition to server.
  };

  modifyGoal = () => {
    // Modify goal, specifically for completeing or archiving goals.
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