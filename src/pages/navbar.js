import {useContext} from "react";
import {reducer, initialState} from "../reducer/reducer.js";
import {ACTIONS} from "../reducer/actions.js";
import {UserContext} from "../App.js";

const Navbar = user => {
  const {state, dispatch} = useContext(UserContext);
  console.log(state);
  return (
    <div className="App">
      <p>User: {JSON.stringify(state.user)}</p>
    </div>
  );
};

export default Navbar;
