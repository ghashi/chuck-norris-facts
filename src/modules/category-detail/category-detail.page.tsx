import * as React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import Button from '../../atomic/atm.button/button.component';
import HighlightedSentence from '../../atomic/atm.highlighted-sentence/highlighted-sentence.component';
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
  getCategoryDetailApiPath,
  GetCategoryDetailResponse
} from '../../data/http/dto/get-category-detail.request';

interface CategoryDetailPageProps {
  name: string;
}

const CategoryDetailPage: React.FunctionComponent<
  CategoryDetailPageProps
> = props => {
  const [response, , refetch] = useDataApi<GetCategoryDetailResponse>(
    getCategoryDetailApiPath(props.name)
  );

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <H1>{props.name} facts!</H1>
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
              <Row>
                <Col xs={12} sm={9} md={9}>
                  <HighlightedSentence>
                    {response.data && response.data.value}
                  </HighlightedSentence>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Button onClick={refetch} loading={response.isLoading}>
                    Gimme another fact!
                  </Button>
                </Col>
              </Row>
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

export default CategoryDetailPage;
