/* eslint-disable default-case */
import { useReducer, useState } from "react";

import "./App.css";

import Books from "./components/Books/Books";
import NewBook from "./components/NewBook/NewBook";
import BooksFilter from "./components/BookFilter/BookFilter";

import ThemeContext from "./components/Context/ThemeContext";
import ThemeDispatchContext from "./components/Context/ThemeDispatchContext";
import AuthContext from "./components/Context/AuthContext";

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
  const [ yearSelected, setYearSelected ] = useState('');

  const addBookHandler = (book) => {
    console.log(book);
    setBooks((prevBooks) => [book, ...prevBooks]);
    // FIXME
    // useEffect
    filterYearHandler(yearSelected);
  };

  // const booksReset =() => {
  //   setBooksFiltered(books)
  // }

  const filterYearHandler = (year) => {
    console.log(year);
    if (year > 0) {
      setYearSelected(year);
      const booksFiltered2 = books.filter((book) => {
        console.log(book.dateRead.getFullYear());
        return book.dateRead.getFullYear().toString() === year;
      });
      setBooksFiltered(booksFiltered2);
    } else {
      setYearSelected('');
      setBooksFiltered(books);
    }
  };

  const [ appTheme, setAppTheme ] = useState('dark');

  const onChangeThemeClick = () => {
    setAppTheme(appTheme === 'dark' ? 'light' : 'dark');
  }

  // REVIEW: Combinación de useReducer y Context
  const reducerUser = (state, action) => {
    switch (action.type) {
      case 'login': 
        // setLoggedInUser({ name: '' });
        if (typeof action.user === 'object') {
          // logica que modifique 
          // action.user.age = 
          return action.user;
        }
        // setLoggedInUser('fruta');
        return state;
      case 'logout':
        return null;
    }
    return state;
  }
  // const [ loggedInUser, setLoggedInUser ] = useState(null);
  const [ loggedUser, dispatch ] = useReducer(reducerUser, null);

  dispatch.login = (paramUser) => {
    dispatch({ type: 'login', user: paramUser})
  }

  // ;

  return (
    <div className="App">
      <button onClick={onChangeThemeClick}>Cambiar a { appTheme === 'dark' ? 'claro' : 'oscuro'}</button>
      <button onClick={() => dispatch({ type: 'login', user: { name: 'Pablo' } })}>Login</button>
      <button onClick={() => dispatch.login({ name: 'Pablo' })}>Login 2</button>
      <button onClick={() => dispatch({ type: 'logout' })}>Logout</button>
      
      <div style={{ color: 'white' }}>Usuario: { loggedUser?.name }</div>
      {/* REVIEW: Context todo en uno */}
      <ThemeContext.Provider value={{ theme: appTheme, dispatch: setAppTheme }}>
        {/* <ThemeDispatchContext.Provider value={setAppTheme}> */}
          <AuthContext.Provider value={{ user: loggedUser, dispatch: dispatch }}>
            <NewBook onBookAdded={addBookHandler} />
            <BooksFilter onFilterYear={filterYearHandler} />
            <Books books={booksFiltered} />
          </AuthContext.Provider>
        {/* </ThemeDispatchContext.Provider> */}
      </ThemeContext.Provider>
    </div>
  );
};
export default App;
