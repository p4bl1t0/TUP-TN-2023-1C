import { useContext } from "react";
import "./BookCard.css";
import ThemeContext from "../Context/ThemeContext";

const BookCard = ({ children }) => {
  const themeSelected = useContext(ThemeContext).theme;
  const themeClass = themeSelected === 'dark' ? 'book-dark' : 'book-light';
  return (
    <div className={"book-item-container " + themeClass}>{children}</div>
  );
};

export default BookCard;
