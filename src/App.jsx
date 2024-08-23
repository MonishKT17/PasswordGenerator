import { useEffect, useRef } from "react";
import "./App";

export default function App() {
  let length = 5;
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "X",
    "Z",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  useEffect(() => {
    function passwordGenerator() {
      let newPasswowrd = " ";

      for (let i = 0; i < length; i++) {
        newPasswowrd +=
          characters[Math.floor(Math.random() * characters.length)];
      }
      return newPasswowrd;
    }
    let x = passwordGenerator();
    console.log(x);
  }, []);

  //what it should include like numbers characters
  const inputRef = useRef();
  console.log(inputRef.current.value)
  return (
    <div>
      <div>
        <input type="text" placeholder="newpassword" />
        <button>copy</button>
      </div>
      <div>
        <input type="range" min="1" max="10" ref={inputRef} />
      </div>
    </div>
  );
}
