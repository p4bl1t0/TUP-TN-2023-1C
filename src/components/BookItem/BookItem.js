import "./BookItem.css";

import DateRead from "../DateRead/DateRead";
import BookCard from "../BookCard/BookCard";

import { useState } from "react";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  const [titleBook, setTitleBook] = useState(title);

  const titleChangeHandler = () => {
    console.log("Clicked!");
    setTitleBook("Actualizado!");
    console.log(titleBook);
  };

  return (
    <BookCard>
      <h2>{titleBook}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount}</p>
      <button onClick={titleChangeHandler}>Cambiar titulo</button>
    </BookCard>
  );
};

export default BookItem;
