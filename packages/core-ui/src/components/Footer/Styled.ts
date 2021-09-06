import styled from 'styled-components';

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #333;
  padding: 3rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterCopyRight = styled.a`
  text-decoration: none;
  outline: none;
  color: #fff;
  &:hover {
    color: #e38b06;
  }
`;
