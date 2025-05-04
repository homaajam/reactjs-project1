import "./App.css";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import BookList from "./components/bookList";
import SearchPage from "./components/searchPage";

const App =()=>{
  const [Books , setBooks]= useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
      shelf: "Currently Reading",
    },
    {
      id: 2,
      title: "Ender's Game",
      author: "Orson Scott Card",
      image: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
      shelf: "currentlyReading",
    },
    {
      id: 3,
      title: "1776",
      author: "David McCullough",
      image: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
      shelf: "wantToRead",
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
      shelf: "read",
    },
  ]);

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
