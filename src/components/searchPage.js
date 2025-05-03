import {link} from "react-router-dom";
import {useState} from "react";
import Book from './book';

const SearchPage= ({books}) => {
  const [query,setQuery]=useState("");
  const filterBooks= query==="" ? [] : books.filter((c)=>c.title.toLowerCase().includes(query.toLowerCase()));

  return (
        <div className="search-books">
          <div className="search-books-bar">
            <link
              className="close-search">
              Close
            </link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(c) => setQuery(c.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {
              filterBooks.map((book)=>(
                <Book key={book.id} book={book}/>

              ))
            }
            </ol>
          </div>
        </div>
      ) ;

}
export default SearchPage;