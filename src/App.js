import "./App.css";
import { useState , useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import BookList from "./components/bookList";
import SearchPage from "./components/searchPage";
import * as BooksAPI from "./utils/BooksAPI";

const App =()=>{
  const [Books , setBooks]= useState([]);
  
  useEffect(()=>{
    const getBooks=async ()=>{
      const res=await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  },[]);
  

  const updateShelf=(bookId,newShelf)=>{
    const targetBook=Books.find((b) => b.id === bookId);
    BooksAPI.update(targetBook,newShelf)
      .then(()=>{
        setBooks((Books) =>
          Books.map((book) =>
            book.id === bookId ? { ...book,shelf: newShelf}: book
        ));}
      )
    
    
  };

  return (
    <Routes>
      <Route 
        exact
        path="/"
        element={
          <BookList books={Books} updateShelf={updateShelf} />
          
        }
        />
      <Route
         path="/search"
         element={
          <SearchPage books={Books}/>
         }
        />

    </Routes>
  );

  
}

export default App;
