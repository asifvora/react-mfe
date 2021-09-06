import Spinner from 'react-loader-spinner';
import { LoaderContainer } from './Styled';

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner type="ThreeDots" color="#e38b06" />
    </LoaderContainer>
  );
};

export default Loader;
