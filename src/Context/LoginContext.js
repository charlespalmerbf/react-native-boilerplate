import {createContext, useContext} from 'react';

const LoginContext = createContext({user: null});

const useLogin = () => useContext(LoginContext);

export {LoginContext, useLogin};
