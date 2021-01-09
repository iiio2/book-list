import Navbar from "./components/Navbar";
import BookList from "./components/BookList"; 
import BookContextProvider from "./contexts/BookContext";
import BookForm from "./components/BookForm";

function App() {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <BookForm />
    </BookContextProvider>
  );
}

export default App;
