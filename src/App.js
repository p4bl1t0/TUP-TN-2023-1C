import { useState } from "react";

import "./App.css";

import Books from "./components/Books/Books";
import NewBook from "./components/NewBook/NewBook";
import BooksFilter from "./components/BookFilter/BookFilter";

const BOOKS = [
  {
    id: 1,
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
  },
  {
    id: 2,
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
  },
  {
    id: 3,
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
  },
  {
    id: 4,
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
  },
];

const App = () => {
  const [books, setBooks] = useState(BOOKS);
  const [booksFiltered, setBooksFiltered] = useState(BOOKS);

  const addBookHandler = (book) => {
    setBooks((prevBooks) => [book, ...prevBooks]);
    console.log(books, book);
  };

  // const booksReset =() => {
  //   setBooksFiltered(books)
  // }

  const filterYearHandler = (year) => {
    console.log(year);
    const booksFiltered2 = books.filter((book) => {
      console.log(book.dateRead.getFullYear());
      return book.dateRead.getFullYear().toString() === year;
    });
    setBooksFiltered(booksFiltered2);
  };

  return (
    <div className="App">
      <NewBook onBookAdded={addBookHandler} />
      <BooksFilter onFilterYear={filterYearHandler} />
      <Books books={booksFiltered} />
    </div>
  );
};
export default App;
