import Book from './book';
const BookShelf=({title ,books})=>{

  return(
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book)=>{
              <Book key={book.id} book={book} />
            })}
          
          </ol>
        </div>
    </div>
  )
 
}
export default BookShelf;