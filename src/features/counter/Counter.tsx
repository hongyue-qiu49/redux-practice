import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../reducer/counterSlice';
import styles from './Counter.module.css';
import { useQuery } from "react-query";
import { fetchCount } from "../../api/counterAPI";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [isEnable, setIsEnable] = useState(false);

  const incrementValue = Number(incrementAmount) || 0;
  const result = useQuery("increment",() => fetchCount(incrementValue),{
    // The query will not execute until the userId exists
    enabled: isEnable,
  })

  const test = async () => {
    setIsEnable(true)
    await result.refetch()
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        {result.isLoading ?<span className={styles.value}>loading...</span>:<span className={styles.value}>{count}</span>}
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => {
            test()
            dispatch(incrementAsync(incrementValue))
          }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
