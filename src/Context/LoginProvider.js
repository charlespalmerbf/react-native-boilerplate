import React, {Component} from 'react';

import {LoginContext, useLogin, useLoggedInUser} from '../Context/LoginContext';

class LoginProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  login = async (username, password) => {
    const {user} = await LOGINFUNCTION(username, password);

    this.setState({user});
    return user;
  };

  logout = async () => {
    //run api login command if needed

    this.setUser(null);
  };

  render() {
    const value = {
      user: this.state.user,
      login: this.login,
      logout: this.logout,
    };

    return (
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export {LoginContext, useLogin, useLoggedInUser};

export default LoginProvider;
