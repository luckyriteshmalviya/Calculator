import { useState } from "react";

export function Calculator() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [operation, setoperation] = useState();
  let [symbol, setsymbol] = useState("");

  return (
    <>
      <input type="number" placeholder="Name" value={num1} onChange={(e)=>{setnum1(e.target.value);}}/>
      <button value={symbol} onClick={()=>{setoperation((+num1) + (+num2));
      console.log(typeof num1, typeof num2)
          setsymbol((symbol = "+"));
        }}>+</button>

      <button value={symbol}
        onClick={() => {
          setoperation(num1 - num2);
          setsymbol((symbol = "-"));
        }}>-</button>

      <button value={symbol}
        onClick={() => {
          setoperation(num1 / num2);
          setsymbol((symbol = "/"));
        }}> / </button>

      <button value={symbol}
        onClick={() => {
          setoperation(num1 * num2);
          setsymbol((symbol = "*"));
        }}>*</button>

      <button
        value={symbol}
        onClick={() => {
          setoperation(num1 % num2);
          setsymbol((symbol = "%"));
        }}
      >%</button>
      
      <input
        type="number"
        placeholder="Number"
        value={num2}
        onChange={(e) => {
          setnum2(e.target.value);
        }}
      />

      <p>
        Operation :{num1} {symbol} {num2}
      </p>
      <br />
      <p>Ans : {operation}</p>
    </>
  );
}
