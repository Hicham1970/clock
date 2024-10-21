import { useEffect, useRef } from "react";

export default function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  // console.log(inputRef);
  useEffect(() => {
    console.log("Component Rendered !!");
  });

  const handleClick1 = () => {
    // ref.current++;
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick2 = () => {
    // ref.current++;
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick3 = () => {
    // ref.current++;
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  };
  return (
    <div>
      <button className="btn" onClick={handleClick1}>
        Click Me 1
      </button>
      <input className="input" ref={inputRef1} />
      <br></br>
      <button className="btn" onClick={handleClick2}>
        Click Me 2
      </button>
      <input className="input" ref={inputRef2} />
      <br></br>
      <button className="btn" onClick={handleClick3}>
        Click Me 3
      </button>
      <input className="input" ref={inputRef3} />
    </div>
  );
}
