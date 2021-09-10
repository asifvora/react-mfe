import * as types from '../actions-types';

export interface InitialStateType {
  themeMode: string,
};

export const initialState : InitialStateType = {
  themeMode: localStorage.getItem('theme') || 'light',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_APP_THEME:
      return {
        ...state,
        themeMode: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
