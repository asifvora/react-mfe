import * as types from '../actions-types';

export interface InitialStateType {
  count: number,
};

export const initialState : InitialStateType = {
  count: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.INCRIMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECRIMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
