import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Body, H1 } from '../../atomic/atm.typography';
import ErrorPlaceholder from '../../atomic/mol.error-placeholder/error-placeholder.component';
import { useDataApi } from '../../atomic/obj.hooks/data-api.hooks';
import {
  LoadingAndError,
  LoadingAndErrorContentPart,
  LoadingAndErrorErrorPart,
  LoadingAndErrorLoadingPart
} from '../../atomic/obj.loading-and-error/loading-and-error.component';
import {
  getCategoriesApiPath,
  GetCategoriesResponse
} from '../../data/http/dto/get-categories.request';
import CategoryList from './component/category-list.component';
import { mapToCategoryListItem } from './home.map';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = _props => {
  const [response, , refetch] = useDataApi<GetCategoriesResponse>(
    getCategoriesApiPath
  );
  const categories = response.data && response.data.map(mapToCategoryListItem);
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
          <LoadingAndError
            isScreenPopulated={!!response.data}
            loading={response.isLoading}
            error={response.isError}
          >
            <LoadingAndErrorLoadingPart>
              <CategoryList isLoading />
            </LoadingAndErrorLoadingPart>
            <LoadingAndErrorContentPart>
              <CategoryList categories={categories} />
            </LoadingAndErrorContentPart>
            <LoadingAndErrorErrorPart>
              <ErrorPlaceholder onClick={refetch} />
            </LoadingAndErrorErrorPart>
          </LoadingAndError>
        </Col>
      </Row>
    </Grid>
  );
};

export default HomePage;
