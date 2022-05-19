import {createContext, useContext} from 'react';

const PopupContext = createContext(null);
const usePopup = () => useContext(PopupContext);

export {PopupContext, usePopup};
