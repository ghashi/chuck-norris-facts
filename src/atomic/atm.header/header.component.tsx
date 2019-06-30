import * as React from 'react';
import { HeaderStyled, HeaderTitleStyled } from './header.style';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = props => {
  return (
    <HeaderStyled>
      <Grid>
        <Row>
          <Col>
            <HeaderTitleStyled>Chuck Norris Facts</HeaderTitleStyled>
          </Col>
        </Row>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;
