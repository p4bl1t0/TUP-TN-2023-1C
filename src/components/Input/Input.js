import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  const { label, value, field , errors, onChange } = props;
  const inputChangeHandler = (event) => {
    onChange(event);
  };
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);
  return (
    <div>
        <label>{ label }</label>
        <input ref={inputRef} className="generic-input" type="text" value={value} onChange={inputChangeHandler}  />
        { errors[field] && 
            <div className="error">{ errors[field] }</div>
        }
    </div>
  );
});

export default Input;