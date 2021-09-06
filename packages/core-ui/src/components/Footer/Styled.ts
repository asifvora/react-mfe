import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #333;
  padding: 1rem 2rem 2rem 2rem;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Container}
`;

export const FooterCopyRight = styled.a`
  text-decoration: none;
  outline: none;
  color: #fff;
  margin-top: 3rem;
  &:hover {
    color: #e38b06;
  }
`;
