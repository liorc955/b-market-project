import { useState } from 'react';
import classes from './CounterInput.module.css';

const CounterInput = (props) => {
    const [counter, setCounter] = useState(1);
    const btnClass = 'btn btn-light';
    const increaseCounter = () => {
        if (counter === 5) return;
        setCounter(prevState=> ++prevState);
    };
    const decraseCounter = () => {
        if (counter === 1) return;
        setCounter(prevState=> --prevState);
    }

  return (
    <div className={classes['input-group']}>
      <button onClick={decraseCounter} type="button" className={btnClass}>-</button>
      <input ref={props.inputRef} type="number" disabled={true} value={counter} />
      <button onClick={increaseCounter} type="button" className={btnClass}>+</button>
  </div>
  );
};

export default CounterInput;
