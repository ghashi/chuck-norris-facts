import * as React from 'react';
import ErrorPlaceholder from '../mol.error-placeholder/error-placeholder.component';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

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
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <ErrorPlaceholder />
            </Col>
          </Row>
        </Grid>
      );
    }

    return this.props.children;
  }
}
