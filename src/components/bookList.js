import BookShelf from "./bookShelf";
import {link} from "react-router-dom";


const BookList=({books,updateShelf})=>{

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf title={"Currently Reading"} books={
          books.filter((book)=> book.shelf === "Currently Reading")} updateShelf={updateShelf}
        />
        <BookShelf title={"Want to Read"} books={
          books.filter((book)=> book.shelf === "Want to Read")} updateShelf={updateShelf}
        />
        <BookShelf title={"read"} books={
          books.filter((book)=> book.shelf === "read")} updateShelf={updateShelf}
        />
      </div>
      <div className="open-search">
        <link to="/search">Add a book</link>
      </div>
    </div>
  )
}
export default BookList;