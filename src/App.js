
import ClaimForm from "./Components/ClaimForm";
import ClaimFormDetails from "./Components/ClaimFormDetails";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";

function App() {
  return (
    <div >

<Router>
 
        <Routes>
          <Route exact path="/" element={<ClaimForm/>}/>
          <Route exact path="/claimformdetails" element={<ClaimFormDetails/>}/>
        </Routes>
     
    </Router>

    </div>
  );
}

export default App;
