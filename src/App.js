import "./App.css";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";


const App =()=>{

  return (
    <Routes>
      <Route 
        exact
        Path='/'
        element={
          
        }
        />
        <Route
         path='/search'
         element={}
         />

    </Routes>
  );

  
}

export default App;
