import * as types from '../actions-types';

export const incriment = () => ({
  type: types.INCRIMENT_COUNT,
});

export const decrement = () => ({
  type: types.DECRIMENT_COUNT,
});
