import * as React from 'react';
import { HeaderStyled, HeaderTitleStyled } from './header.style';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Link } from 'react-router-dom';
import { homeRoutePath } from '../../modules/home/home.lazy';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = props => {
  return (
    <HeaderStyled>
      <Grid>
        <Row>
          <Col>
            <Link to={homeRoutePath}>
              <HeaderTitleStyled>Chuck Norris Facts</HeaderTitleStyled>
            </Link>
          </Col>
        </Row>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;
