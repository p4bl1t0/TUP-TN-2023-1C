import { useContext } from "react";
import BookItem from "../BookItem/BookItem";
import ThemeContext from "../Context/ThemeContext";
import ThemeDispatchContext from "../Context/ThemeDispatchContext";
import AuthContext, { useAuthUser } from "../Context/AuthContext";

const Books = ({ books }) => {
  const booksMapped = books.map((book, index) => (
    <BookItem
      key={book.id}
      title={book.title}
      author={book.author}
      dateRead={book.dateRead}
      pageCount={book.pageCount}
    />
  ));

  const themeContextValue = useContext(ThemeContext);
  const appTheme = themeContextValue.theme;
  // const dispatch = useContext(ThemeDispatchContext);
  const onChangeThemeClick = () => {
    themeContextValue.dispatch(appTheme === 'dark' ? 'light' : 'dark')
  }
  // const authContext = useContext(AuthContext);
  const currentUser = useAuthUser();
  return (
    <>
      {booksMapped.length ? booksMapped : <p>No hay libros registrados</p>}
      <footer>
        <button onClick={onChangeThemeClick}>Cambiar a { appTheme === 'dark' ? 'claro' : 'oscuro'}</button>
        <div style={{color: "white"}}> 
          { currentUser &&
            <>
              <div>Usuario: { currentUser.name } </div>
            </>
            
          }
          

        </div>
      </footer>
    </>
  );
};

export default Books;
