import React from "react";
import "./App.css";
import {ContextProvider} from "./reducer/context.js";
import Measurements from "./components/measurements";
import Navbar from "./pages/navbar";

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Measurements />
      </div>
    </ContextProvider>
  );
};

export default App;
