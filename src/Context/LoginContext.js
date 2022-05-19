import {createContext, useContext} from 'react';

const LoginContext = createContext({
  user: null,
  setUser: null,
});

const useLogin = () => useContext(LoginContext);
const useLoggedInUser = () => {
  const {user} = useLogin();

  return user;
};

export {LoginContext, useLogin, useLoggedInUser};
