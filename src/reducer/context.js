import React, {useReducer} from "react";
import {reducer, initialState} from "./reducer.js";

export const UserContext = React.createContext(initialState);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state: state, dispatch: dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
