import BookItem from "../BookItem/BookItem";

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

  return (
    <>{booksMapped.length ? booksMapped : <p>No hay libros registrados</p>}</>
  );
};

export default Books;
