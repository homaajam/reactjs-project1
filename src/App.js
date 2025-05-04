import "./App.css";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import BookList from "./components/bookList";
import SearchPage from "./components/searchPage";

const App =()=>{

  return (
    <Routes>
      <Route 
        exact
        Path='/'
        element={
          <BookList books={Books} />
          
        }
        />
        <Route
         path='/search'
         element={
          <SearchPage books={Books}/>
         }
         />

    </Routes>
  );

  
}

export default App;
