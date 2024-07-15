import BoxColor from "./BoxColor";
import { useState, useRef } from "react";

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [value, setValue] = useState('');
  const inputRef = useRef(null);


  return (
    <>
      <input
      id="colorInput"
      type="text"
      placeholder="Choose a color"
      className="input"
      onChange={() => setValue(inputRef.current.value)}
      value={value}
      ref={inputRef}/>
      <BoxColor colors={colors} value={value}/>
    </>
  );
}

export default MyForm;