import { useState } from "react";

import "./BookForm.css"

const BookForm = ({onBookAdded}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [dateRead, setDateRead] = useState("");
  const [pageCount, setPageCount] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const dateReadChangeHandler = (event) => {
    setDateRead(event.target.value);
  };

  const pageCountChangeHandler = (event) => {
    setPageCount(event.target.value);
  };

  const addBookHandler = (event) => {
    event.preventDefault();
    const newBook = {title, author,dateRead: new Date(dateRead),pageCount};
    onBookAdded(newBook);
  };
  return (
    <form className="new-book-controls">
      <div className="new-book-control" >
        <label>Titulo: </label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div className="new-book-control">
        <label>Autor: </label>
        <input type="text" value={author} onChange={authorChangeHandler} />
      </div>
      <div className="new-book-control">
        <label>¿Cuando terminaste de leerlo?</label>
        <input
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={dateRead}
          onChange={dateReadChangeHandler}
        />
      </div>
      <div className="new-book-control">
        <label>Cantidad de paginas</label>
        <input
          type="number"
          min="1"
          step="1"
          value={pageCount}
          onChange={pageCountChangeHandler}
        />
      </div>
      <div className="new-book-actions">
        <button onClick={addBookHandler}>Agregar lectura</button>
      </div>
    </form>
  );
};

export default BookForm;
