import {link} from "react-router-dom";

const SearchPage= () => {

  return (
        <div className="search-books">
          <div className="search-books-bar">
            <link
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) ;

}
export default SearchPage;