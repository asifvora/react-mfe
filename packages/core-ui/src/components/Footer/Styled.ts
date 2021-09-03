import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #333;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 3rem 2rem;
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
