import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Body, H1 } from '../../atomic/atm.typography';
import { Link } from 'react-router-dom';
import { homeRoutePath } from '../home/home.lazy';
import Button from '../../atomic/atm.button/button.component';
import { VSeparator } from '../../atomic/atm.utils/utils.style';

interface Page404PageProps {}

const Page404Page: React.FunctionComponent<Page404PageProps> = props => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <H1>Error 404</H1>
          <VSeparator />
          <Body>
            The page you're looking for is not here because Chuck Norris took
            it.
          </Body>
          <VSeparator />
          <Link to={homeRoutePath}>
            <Button>Return to somewhere safe!</Button>
          </Link>
        </Col>
      </Row>
    </Grid>
  );
};

export default Page404Page;
