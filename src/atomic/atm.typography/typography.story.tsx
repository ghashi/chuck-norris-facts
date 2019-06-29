import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Body, H1, H2, H3, H4 } from './typography.component';

const stories = storiesOf('Atoms', module);

stories.add('Typography', () => (
  <Grid fluid={true}>
    <Row>
      <Col>
        <H1>This is the heading 1 style</H1>
        <H2>This is the heading 2 style</H2>
        <H3>This is the heading 3 style</H3>
        <H4>This is the heading 4 style</H4>
      </Col>
    </Row>
    <Row>
      <Col>
        <Body>
          This is the body paragraph style. Testing component with two lines of
          text.
        </Body>
        <Body>This is the second line</Body>
      </Col>
    </Row>
  </Grid>
));
