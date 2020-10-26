import React from 'react';
import TokenService from '../services/token-service';
import UserService from '../services/user-service';

const UserContext = React.createContext({
  user: {},
  points: null,
  point_goal: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
  loadPoints: () => {},
  modifyPoints: () => {}
});

export default UserContext;

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    const state = {
      user: {},
      error: null
    };
    const jwtPayload = TokenService.parseAuthToken();
    if (jwtPayload) {
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub
      }
    }
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

  setUser = (user) => {
    this.setState({
      user
    });
  };

  processLogin = (authToken) => {
    TokenService.saveAuthToken(authToken);
    const jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub
    });
  };

  processLogout = () => {
    TokenService.clearAuthToken();
    this.setUser({});
  };

  loadPoints = () => {
    return UserService.getPoints()
      .then(res => {
        this.setState(res);
      })
      .catch(this.setError);
  };

  modifyPoints = (modify_points) => {
    return UserService.updateUser({
        modify_points
      })
      .then(res => {
        this.setState(res)
      })
      .catch(this.setError);
  };

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      modifyPoints: this.modifyPoints,
      loadPoints: this.loadPoints,
      processLogin: this.processLogin,
      processLogout: this.processLogout
    };
    return ( <
      UserContext.Provider value = {
        value
      } > {
        this.props.children
      } <
      /UserContext.Provider>
    )
  }
}