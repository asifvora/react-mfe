import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './Styled';
import { setTheme } from '../../actions/app';

export const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const isDarkTheme = localStorage.getItem('theme') === 'dark';
    setDarkTheme(isDarkTheme);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    const themeMode = isDarkTheme ? 'light' : 'dark';
    dispatch(setTheme(themeMode));
    localStorage.setItem('theme', themeMode);
  };

  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};
