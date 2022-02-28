import {useContext} from "react";
import {UserContext} from "../reducer/context.js";

const Navbar = user => {
  const {state} = useContext(UserContext);
  console.log(state);
  return (
    <div className="App">
      <p>User: {JSON.stringify(state.user)}</p>
    </div>
  );
};

export default Navbar;
