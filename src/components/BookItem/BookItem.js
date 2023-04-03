import "./BookItem.css";

import DateRead from "../DateRead/DateRead";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  return (
    <div className="book-item-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount}</p>
    </div>
  );
};

export default BookItem;
