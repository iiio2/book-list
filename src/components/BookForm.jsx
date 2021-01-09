import { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'ADD_BOOK', title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          style={{ width: '40%' }}
          className='form-control'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='author'>Author</label>
        <input
          type='text'
          className='form-control'
          style={{ width: '40%' }}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button className='btn btn-success'>Add</button>
    </form>
  );
};

export default BookForm;
