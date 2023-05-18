/*  */

import { useEffect, useState } from "react";

const useFecthBooks = (language) => {
    console.log('useFecthBooks', language);
    const [availableBooks, setAvailablesBooks] = useState([]);
    useEffect(() => {
        const fecthBooks = async () => {
          const booksResponse = await fetch('http://localhost:3123/books', { method: 'GET', headers: {} }).then((response) => response.json()).catch((err) => { 
            console.log('err', err);
          });
          console.log('books', language, booksResponse);
          setAvailablesBooks(booksResponse.books.filter((book) => book.language === language));
        };
        fecthBooks();
        return () => {
          // 
        };
    }, [language]);

    return availableBooks;
};
export default useFecthBooks;