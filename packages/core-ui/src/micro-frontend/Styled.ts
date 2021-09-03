import styled from 'styled-components';

export const ErrorContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #f54c2e;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ErrorContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media only screen and (min-width: 1200px) {
    padding: 3rem 6rem;
  }
  @media only screen and (min-width: 1500px) {
    padding: 3rem 9rem;
  }
`;

export const ErrorContentTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
`;

export const ErrorText = styled.p`
  font-size: 1.8rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
