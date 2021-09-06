import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const NotFoundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16rem 0;
`;

export const NotFoundContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  ${Container};
`;

export const NotFoundTitle = styled.h2`
  font-size: clamp(2rem, 8vw, 5rem);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  height: 50rem;
`;