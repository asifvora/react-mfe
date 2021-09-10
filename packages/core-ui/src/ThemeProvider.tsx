import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';
import { lightTheme, darkTheme } from './GlobalStyles';

interface IProps {
  children: any;
}

export const Theme: React.FC<IProps> = (props) => {
  const { children } = props;
  const themeMode: string = useSelector(
    (state: any) => state.app.themeMode,
    shallowEqual
  );

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
