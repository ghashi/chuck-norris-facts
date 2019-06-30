import * as React from 'react';
import { useDataApi } from '../../atomic/obj.hooks/data-api.hooks';
import {
  getCategoriesPath,
  GetCategoriesResponse
} from '../../data/http/dto/get-categories.request';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { H1, Body } from '../../atomic/atm.typography';
import CategoryList from './component/category-list.component';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = _props => {
  const [response] = useDataApi<GetCategoriesResponse>(getCategoriesPath);
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <H1>Learn something about Him!</H1>
          <Body>Choose a category:</Body>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CategoryList categories={response.data} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </Col>
      </Row>
    </Grid>
  );
};

export default HomePage;
