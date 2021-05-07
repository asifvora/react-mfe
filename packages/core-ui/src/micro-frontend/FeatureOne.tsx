import MicroFrontend from './MicroFrontend';
import { history as defaultHistory } from '../config/routes';
import hostsConfig from '../config/host';

interface IProps {
  history: Object;
}

export const FeatureOne: React.FC<IProps> = (props) => {
  const { history } = props;

  return (
    <MicroFrontend
      history={history || defaultHistory}
      host={hostsConfig.featureOne}
      name="FeatureOne"
    />
  );
};

export default FeatureOne;
