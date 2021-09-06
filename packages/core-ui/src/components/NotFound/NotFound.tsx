import { NotFoundWrapper, NotFoundContainer, NotFoundTitle } from './Styled';

export const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <NotFoundTitle>404 Page not found</NotFoundTitle>
      </NotFoundContainer>
    </NotFoundWrapper>
  );
};
