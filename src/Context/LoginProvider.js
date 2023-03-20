import React, {useState} from 'react';

import {LoginContext, useLogin} from 'context/LoginContext';
import {clearSession, storeSessionValues} from 'Storage';

import { loginUser } from 'api/api';

const LoginProvider = props => {
  const [user, setUser] = useState(null);

  const saveUser = async (loggedInUser, storeInfo) => {
    storeInfo && storeSessionValues('blah blah');
    setUser({userId: loggedInUser.userid, token: loggedInUser.password});
  };

  const autoLogin = async token => {
    try {
      //fetch user w/ token
      const loggedInUser = {email: 'test@gmail.com', password: 'Admin123!'};
      await saveUser(loggedInUser);
    } catch (e) {
      throw e;
    }
  };

  const login = async (email, password) => {
    try {
      const loggedInUser = await loginUser(email, password);
      await saveUser(loggedInUser, true);
      return true;
    } catch (e) {
      throw e;
    }
  };

  const logout = async () => {
    // logoutUser(user.session);
    clearSession();
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{user, login, logout, autoLogin}}>
      {props.children}
    </LoginContext.Provider>
  );
};

export {LoginContext, useLogin};

export default LoginProvider;
