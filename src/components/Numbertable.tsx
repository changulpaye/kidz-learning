import { FormEvent, useState } from "react";
import classes from "./NumberTable.module.css";

const NumberTable = () => {
  const [enteredNum, setEnteredNum] = useState<number>();
  const handleInputChange = (event:any) => {
    setEnteredNum(event.target.value);
  };
  return (
    <div className="container" >
      <div className={classes.list}>
        <input onChange={handleInputChange} value={enteredNum} type="number" placeholder="Enter Number" />
      </div>
      <ul className={classes.listStyle}>
        {enteredNum &&
          Array(10)
            .fill({})
            .map((d, i) => {
              let multiplier = i + 1;
              return (
                <li>
                  <h1>{enteredNum}</h1> x <h1> {multiplier} </h1> ={" "}
                  <h1> {enteredNum * multiplier} </h1>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default NumberTable;
