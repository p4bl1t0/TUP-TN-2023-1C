import "./BookItem.css";

import DateRead from "../DateRead/DateRead";
import BookCard from "../BookCard/BookCard";

import { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  const [titleBook, setTitleBook] = useState(title);

  const titleChangeHandler = () => {
    console.log("Clicked!");
    setTitleBook("Actualizado!");
    console.log(titleBook);
  };

  const themeSelected = useContext(ThemeContext).theme;

  console.log('themeSelected', themeSelected);
  return (
    <BookCard>
    
      <h2 className={themeSelected}>{titleBook}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount}</p>
      <button onClick={titleChangeHandler}>Cambiar titulo</button>
    </BookCard>
  );
};

export default BookItem;
