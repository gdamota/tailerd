import React from "react";
import "./App.css";
import {useContext, useReducer} from "react";
import {reducer, initialState} from "./reducer/reducer.js";
// import {ACTIONS} from "./reducer/actions.js";
import Measurements from "./components/measurements";

export const UserContext = React.createContext(initialState);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state: state, dispatch: dispatch}}>
      <div className="App">
        <Measurements />
      </div>
    </UserContext.Provider>
  );
};

export default App;
