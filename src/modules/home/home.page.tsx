import * as React from 'react';
import { useDataApi } from '../../atomic/obj.hooks/data-api.hooks';
import {
  getCategoriesPath,
  GetCategoriesResponse
} from '../../data/http/dto/get-categories.request';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = _props => {
  const [data] = useDataApi<GetCategoriesResponse>(getCategoriesPath);
  return (
    <div>
      home
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
