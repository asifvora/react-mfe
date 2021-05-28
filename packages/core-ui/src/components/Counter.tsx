import React from 'react';
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { incriment, decrement } from '../actions/counter';
import { Button } from '@mfe/shared/dist/bundle';

export const Counter: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const count: number = useSelector(
    (state: any) => state.counter.count,
    shallowEqual
  );

  const onIncriment = () => {
    dispatch(incriment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <Button onClick={onIncriment}>+</Button>
      <p>count is :{count}</p>
      <Button onClick={onDecrement}>-</Button>
    </>
  );
};

export default Counter;
