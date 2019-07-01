import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Bold } from '../atm.typography';
import { FooterContentStyled, FooterStyled } from './footer.style';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = props => {
  return (
    <FooterStyled>
      <Grid>
        <Row center="xs">
          <Col>
            <FooterContentStyled>
              <Bold>Chuck Norris Facts</Bold> by Guilherme Hashioka
            </FooterContentStyled>
          </Col>
        </Row>
      </Grid>
    </FooterStyled>
  );
};

export default Footer;
