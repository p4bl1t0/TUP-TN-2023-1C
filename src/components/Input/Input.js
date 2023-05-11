import { useRef, useState } from "react";

const Input = ({ label, value, errors }) => {
    const inputRef = useRef(null);
    
    return (
        <div>
            <label>{ label }: </label>
            <input className="author-input" type="text" ref={inputRef} />
            { errors?.author && 
            <div className="error">{ errors?.author }</div>
            }
        </div>
    )
};

export default Input;