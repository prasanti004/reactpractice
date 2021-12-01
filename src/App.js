import "./App.css";
import ClaimForm from "./Components/ClaimForm";
import ClaimFormDetails from "./Components/ClaimFormDetails";
import Login from "./Components/Login";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";

function App() {
  return (
    <div className="App">

<Router>
 
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/claimform" element={<ClaimFormDetails/>}/>
        </Routes>
     
    </Router>

    </div>
  );
}

export default App;
