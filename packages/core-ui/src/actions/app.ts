import * as types from '../actions-types';

export const setTheme = (payload: string) => ({
  type: types.SET_APP_THEME,
  payload,
});
