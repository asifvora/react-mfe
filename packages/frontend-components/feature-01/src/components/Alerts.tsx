import React from 'react';
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { incriment, decrement } from '../actions/alerts';
// import { Button } from '@mfe/shared/dist/bundle';

export const Alerts: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const count: number = useSelector(
    (state: any) => state.alerts.count,
    shallowEqual
  );

  const onIncriment = () => {
    dispatch(incriment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button  onClick={onIncriment}>+</button>
        <p>Alerts is :{count}</p>
      <button  onClick={onDecrement}>-</button>
    </div>
  );
};

export default Alerts;
