
import { StyleSheetManager } from 'styled-components';
import extraScopePlugin from 'stylis-plugin-extra-scope';

Object.defineProperty(extraScopePlugin, 'name', {
  value: 'feature-01',
});

export type IProps = {
  scope?: string;
  children:any
};

export const StyleProvider: React.FC<IProps> = (props) => {
  const { scope, children } = props;
  const stylisPlugins = scope ? [extraScopePlugin(`${scope}`)] : [];

  return (
    <StyleSheetManager stylisPlugins={stylisPlugins}>
      {children}
    </StyleSheetManager>
  );
};

export default StyleProvider;
