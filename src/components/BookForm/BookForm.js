import { useRef, useState } from "react";

import "./BookForm.css";
import Input from "../Input/Input";

// FIXME
function validateForm (formValidation, formData) {
  let errors = {};
  Object.keys(formValidation).forEach((key) => {
    if (formValidation[key].required) {
      if (!formData[key]) {
        errors[key] = 'No puede estar vacío';
      }
    }
  });
  return errors;
}


const BookForm = ({onBookAdded}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [dateRead, setDateRead] = useState("");
  const [pageCount, setPageCount] = useState("");

  const [ errors, setErrors ] = useState({});

  let formValidation = {
    title: {
      required: true,
      minLength: 3
    },
    author: {
      required: true,
    },

  }

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    /* if (event.target.value === '') {
      setErrors({ ...errors, title: 'No puede estar vacío.' })
    } else {
      setErrors({ ...errors, title: undefined });
    } */
  };

  const validateAuthor = (value) => {
    if (value === '') {
      setErrors(prevErrors => { 
        return ({ ...prevErrors, author: 'No puede estar vacío.' });
      });
      return false;
    } else {
      setErrors(prevErrors => { 
        return ({ ...prevErrors, author: undefined });
      });
      return true;
    }

  }

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
    validateAuthor(event.target.value);
  };

  const authorOnBlurHandler = (event) => {
    validateAuthor(event.target.value);
    console.log('timerRef.current', timerRef.current);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const dateReadChangeHandler = (event) => {
    setDateRead(event.target.value);
  };

  const pageCountChangeHandler = (event) => {
    setPageCount(event.target.value);
  };

  const addBookHandler = (event) => {
    console.log('categoryInputRef.current.value', categoryInputRef.current.value);
    event.preventDefault();
    let formOk = true;
    console.log('pageCount', Number(pageCount));
    if (Number(pageCount) > 0) {
      // solo si es mayor a cero
      setErrors({ ...errors, pageCount: undefined });
      console.log('true', { ...errors, pageCount: undefined });
    } else {
      formOk = false;
      setErrors({ ...errors, pageCount: 'Debe ser mayor a cero.' });
    }
    
    formOk = formOk && validateAuthor(author);
    console.log('formOk', formOk);
    const newBook = { title, author, dateRead: new Date(dateRead), pageCount };
    let formErrors = validateForm(formValidation, newBook);
    console.log('formErrors', formErrors);
    setErrors(formErrors);
    if (formOk) {
      onBookAdded(newBook);
    }
  };

  const titleBlurHandler = () => {
    console.log('titleBlurHandler', authorInputRef);
    authorInputRef.current.focus();
    // document.querySelector('.author-input').focus();
    timerRef.current = setInterval(() => {
      console.log('title blur');
    }, 1000);
  }
  const authorInputRef = useRef(null); // titleInputRef.current
  const categoryInputRef = useRef(null); // titleInputRef.current

  const categoryChangeHandler = (event) => {
    categoryInputRef.current.value = event.target.value;
  };
  const timerRef = useRef(null);

  return (
    <form className="new-book-controls">
      <div className="new-book-control" >
        <label>Titulo: </label>
        <input type="text" value={title} onChange={titleChangeHandler} onBlur={titleBlurHandler}  />
        { errors?.title && 
          <div className="error">{ errors?.title }</div>
        }
      </div>
      <div className="new-book-control">
        <label>Autor: </label>
        <input className="author-input" type="text" value={author} onChange={authorChangeHandler} onBlur={authorOnBlurHandler} ref={authorInputRef} />
        { errors?.author && 
          <div className="error">{ errors?.author }</div>
        }
      </div>
      <div className="new-book-control">
        <label>Categoria: </label>
        <input className="author-input" type="text" onChange={categoryChangeHandler} ref={categoryInputRef} />
        { errors?.author && 
          <div className="error">{ errors?.author }</div>
        }
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
        { errors?.dateRead && 
          <div className="error">{ errors?.dateRead }</div>
        }
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
        { errors?.pageCount && 
          <div className="error">{ errors?.pageCount }</div>
        }
      </div>
      <div className="new-book-actions">
        <button onClick={addBookHandler}>Agregar lectura</button>
      </div>
    </form>
  );
};

export default BookForm;
