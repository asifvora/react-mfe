import React from "react";

interface IProps {
  appName: String;
}

interface IState {
  hasError: Boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Failed to load {this.props.appName}</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;