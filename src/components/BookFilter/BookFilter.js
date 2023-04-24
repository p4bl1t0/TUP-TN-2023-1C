import { useState } from "react";
import "./BookFilter.css";

const BooksFilter = ({ onFilterYear }) => {
  const [yearSelected, setYearSelected] = useState("");

  const yearSelectionHandler = (event) => {
    setYearSelected(event.target.value);
    onFilterYear(event.target.value);
  };

  return (
    <div className="Books-filter">
      <p>Seleccionaste el año: {yearSelected}</p>
      <div className="Books-filter__control">
        <label>Filter by year</label>
        <select onChange={yearSelectionHandler}>
          <option value="">Seleccione un año</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default BooksFilter;
