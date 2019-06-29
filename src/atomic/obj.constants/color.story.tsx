import { storiesOf } from '@storybook/react';
import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight, Spacing } from '.';
import { H2 } from '../atm.typography';

const ColorSample: any = styled.div`
  height: 60px;
  width: 100%;
`;
ColorSample.displayName = 'ColorSample';

const ColorSampleText: any = styled.label`
  display: block;
  text-align: center;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Normal};
  margin-top: ${Spacing.Small};
`;
ColorSampleText.displayName = 'ColorSampleText';

storiesOf('Objects', module).add('Colors', () => (
  <div>
    <Grid fluid={true}>
      <H2>Brand colors</H2>
      <Row>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.Primary }} />
          <ColorSampleText>Primary - {Color.Primary}</ColorSampleText>
        </Col>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.Secondary }} />
          <ColorSampleText>Secondary - {Color.Secondary}</ColorSampleText>
        </Col>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.Warning }} />
          <ColorSampleText>Warning - {Color.Warning}</ColorSampleText>
        </Col>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.Success }} />
          <ColorSampleText>Success - {Color.Success}</ColorSampleText>
        </Col>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.Alert }} />
          <ColorSampleText>Alert - {Color.Alert}</ColorSampleText>
        </Col>
      </Row>
    </Grid>

    <Grid fluid={true}>
      <H2>Gray shades</H2>
      <Row>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.GrayXLight }} />
          <ColorSampleText>GrayXLight - {Color.GrayXLight}</ColorSampleText>
        </Col>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.GrayLight }} />
          <ColorSampleText>GrayLight - {Color.GrayLight}</ColorSampleText>
        </Col>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.Gray }} />
          <ColorSampleText>Gray - {Color.Gray}</ColorSampleText>
        </Col>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.GrayDark }} />
          <ColorSampleText>GrayDark - {Color.GrayDark}</ColorSampleText>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={3}>
          <ColorSample style={{ backgroundColor: Color.GrayXDark }} />
          <ColorSampleText>GrayXDark - {Color.GrayXDark}</ColorSampleText>
        </Col>
      </Row>
      <Row>
        <Col>
          <H2>Black and white</H2>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <ColorSample style={{ backgroundColor: Color.Black }} />
          <ColorSampleText>Black</ColorSampleText>
        </Col>
        <Col xs={6}>
          <ColorSample style={{ backgroundColor: Color.White }} />
          <ColorSampleText>White</ColorSampleText>
        </Col>
      </Row>
    </Grid>
  </div>
));
