import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }
  @media (min-width: 1500px) {
    max-width: 1500px;
  }
  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;
