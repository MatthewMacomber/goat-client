import React, {Component} from 'react';
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
    const state = {
      goals: [],
      error: null
    };
    this.state = state;
  };

  setError = (error) => {
    this.setState({
      error: error.message
    });
  };

  clearError = () => {
    this.setState({
      error: null
    });
  };

  componentDidMount = () => {
    this.loadGoals();
  }

  loadGoals = () => {
    return GoalService.getGoal()
      .then(goals => {
        this.setState({
          goals
        });
      })
      .catch(this.setError);
  };

  addGoal = (goal) => {
    return GoalService.addGoal(goal)
      .then(() => {
        this.loadGoals();
      })
      .catch(this.setError);
  };

  modifyGoal = (goal) => {
    return GoalService.modifyGoal(goal)
      .then(() => {
        this.loadGoals();
      })
      .catch(this.setError);
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

    return ( <
      GoalContext.Provider value = {
        value
      } > {
        this.props.children
      } <
      /GoalContext.Provider>
    )
  }
}