import React from 'react';
import TokenService from '../services/token-service';

const UserContext = React.createContext({
  user: {},
  points: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {}
});

export default UserContext;

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    const state = {user: {}, error: null};
    const jwtPayload = TokenService.parseAuthToken();
    if(jwtPayload) {
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub
      }
    }
    this.state = state;
  };

  setError = (error) => {
    console.error(error);
    this.setState({error});
  };

  clearError = () => {
    this.setState({error: null});
  };

  setUser = (user) => {
    this.setState({user});
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
    // Load the logged in users current points;
    /*
    UserService.getPoints()
      .then(points => {
        this.setState({points});
      })
      .catch(this.setError);
      */
  };

  changePoints = (value) => {
    // Change the users points based on the input value;
    /*
    UserService.adjustPoints(value)
      .then(points => {
        this.setState({points})
      })
      .catch(this.setError);
      */
  };

  render() {
    const value = {
      user: this.state.user,
      points: this.state.points,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
} 
