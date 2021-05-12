import React from "react";

interface IState {
  hasError: Boolean;
}

class ErrorBoundary extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;