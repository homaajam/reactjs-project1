import BookShelf from "./bookShelf";
import {Link} from "react-router-dom";


const BookList=({books,updateShelf})=>{

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf title={"Currently Reading"} books={
          books.filter((book)=> book.shelf === "currentlyReading")} updateShelf={updateShelf}
        />
        <BookShelf title={"Want to Read"} books={
          books.filter((book)=> book.shelf === "wantToRead")} updateShelf={updateShelf}
        />
        <BookShelf title={"Read"} books={
          books.filter((book)=> book.shelf === "read")} updateShelf={updateShelf}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}
export default BookList;