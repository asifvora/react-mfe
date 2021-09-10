import styled from 'styled-components';

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 3rem;
`;

export const FooterContainer = styled.div`
  display: flex;
`;

export const FooterCopyRight = styled.a`
  text-decoration: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
