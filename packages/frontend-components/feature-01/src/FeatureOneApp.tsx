import React from 'react';
import App from './App';
import { reducerMap } from './bundle';

interface IProps {
  containerId?: string;
  history?: any;
  registerStore?: (reducers: any) => void;
}

class FeatureOneApp extends React.Component<IProps> {
  componentDidMount() {
    const { registerStore } = this.props;
    registerStore(reducerMap);
  }

  render() {
    const { history } = this.props;

    return <App history={history} />;
  }
}

export default FeatureOneApp;
