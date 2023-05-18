import React from "react";
import BookForm from "../BookForm/BookForm";

const NewBook = ({ onBookAdded }) => {
  const newBookHandler = (book) => {
    const newNewBook = {
      id: Math.random(),
      ...book,
    };
    onBookAdded(newNewBook);

  };
  return (
    <div className="new-book">
      <BookForm onBookAdded={newBookHandler} />
    </div>
  );
};

export default NewBook;
