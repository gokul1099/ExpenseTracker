import React, {Component, ErrorInfo, ReactNode} from "react";
import {ErrorComponent} from "./ErrorComponent";

interface Props {
  children: ReactNode;
  catchError: "always" | "dev" | "prod" | "never";
}
interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
/**
 * This component handles all the error encounter in JS side.
 * the error boundary component should be a class component  as per react docs
 */

export class ErrorBoundary extends Component<Props, State> {
  state = {error: null, errorInfo: null};
  //if an error in a child is encountered this will run
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    //can log error messages to an error reporting service here
  }
  //reset the error back to null
  resetError = () => {
    this.setState({error: null, errorInfo: null});
  };
  //to avoid unneccessary re-render
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
    nextContext: any,
  ): boolean {
    return nextState.error !== nextProps.error;
  }
  //only enable if we are catching error in the right environment
  isEnabled(): boolean {
    return (
      this.props.catchError === "always" ||
      (this.props.catchError === "dev" && __DEV__) ||
      (this.props.catchError === "prod" && !__DEV__)
    );
  }

  render() {
    return this.isEnabled() && this.state.error ? (
      <ErrorComponent
        onReset={this.resetError}
        error={this.state.error}
        errorInfo={this.state.errorInfo}
      />
    ) : (
      this.props.children
    );
  }
}
