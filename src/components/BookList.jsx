import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { books, dispatch } = useContext(BookContext);
  return (
    <div className='booklist container mt-3'>
      <ul>
        {books.map((book) => (
          <div className='card p-3 my-2' key={book.id}>
            <div className='book-body'>
              <h5>Title: {book.title}</h5>
              <h6>Author: {book.author}</h6>
            </div>

            <div className='delete-btn'>
              <button
                onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
                className='btn btn-danger'
              >
                X
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
