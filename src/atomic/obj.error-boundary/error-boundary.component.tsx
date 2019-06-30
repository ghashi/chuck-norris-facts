import * as React from 'react';
import ErrorPlaceholder from '../mol.error-placeholder/error-placeholder.component';

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPlaceholder />;
    }

    return this.props.children;
  }
}
