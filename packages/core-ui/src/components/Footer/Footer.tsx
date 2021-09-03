import React from 'react';
import {
  FooterSection,
  FooterContainer,
  FooterCopyRight,
} from './Styled';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <FooterCopyRight href="https://github.com/asifvora/react-mfe" target="_blank">
          &copy; Copyright {year}
        </FooterCopyRight>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
