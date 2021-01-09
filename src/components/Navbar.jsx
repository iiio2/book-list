import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='myNavbar container text-center mt-2'>
      <h3>Ninja BookList</h3>
      <p>
        {books.length === 0
          ? 'You have No book'
          : `You have ${books.length} books.`}
      </p>
    </div>
  );
};

export default Navbar;
