import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import Button from '../../atomic/atm.button/button.component';
import { H1 } from '../../atomic/atm.typography';
import ErrorPlaceholder from '../../atomic/mol.error-placeholder/error-placeholder.component';
import { useDataApi } from '../../atomic/obj.hooks/data-api.hooks';
import {
  LoadingAndError,
  LoadingAndErrorContentPart,
  LoadingAndErrorErrorPart,
  LoadingAndErrorLoadingPart
} from '../../atomic/obj.loading-and-error/loading-and-error.component';
import {
  GetCategoriesResponse,
  getCategoryDetailApiPath
} from '../../data/http/dto/get-category-detail.request';

interface CategoryPageProps {
  name: string;
}

const CategoryPage: React.FunctionComponent<CategoryPageProps> = props => {
  const [response, , refetch] = useDataApi<GetCategoriesResponse>(
    getCategoryDetailApiPath(props.name)
  );

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <H1>{props.name}</H1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <LoadingAndError
            isScreenPopulated={!!response.data}
            loading={response.isLoading}
            error={response.isError}
          >
            <LoadingAndErrorLoadingPart>loading</LoadingAndErrorLoadingPart>
            <LoadingAndErrorContentPart>
              <pre>{JSON.stringify(response, null, 2)}</pre>
              <Col xs={12}>
                <Button onClick={refetch}> Gimme another fact!</Button>
              </Col>
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

export default CategoryPage;
