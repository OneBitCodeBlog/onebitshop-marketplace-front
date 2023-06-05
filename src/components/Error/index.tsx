import React, { Component, ReactNode } from "react";
import ErrorScreen from "./ErrorScreen";

interface Props {
  children: ReactNode;
}

interface State {
  hasErros: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasErros: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Erro capturado pelo ErrorBoundary", error, errorInfo);
  }

  render() {
    if (this.state.hasErros) {
      return <ErrorScreen />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
