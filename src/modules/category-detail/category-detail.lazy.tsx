import * as React from 'react';
import { RouteChildrenProps } from 'react-router';

export const categoryDetailRoutePath = `/category/:id`;
interface CategoryDetailLazyParams {
  id: string;
}
export const getCategoryDetailUrlPath = (id: string) => `/category/${id}`;

const CategoryDetailPage = React.lazy(() => import('./category-detail.page'));

// TODO: Improve loading
const renderLoader = () => <p>Loading</p>;

interface CategoryDetailLazyProps
  extends RouteChildrenProps<CategoryDetailLazyParams> {}

const CategoryDetailLazy: React.FunctionComponent<
  CategoryDetailLazyProps
> = props => {
  const name = props.match ? props.match.params.id : '';
  return (
    <React.Suspense fallback={renderLoader()}>
      <CategoryDetailPage name={name} />
    </React.Suspense>
  );
};

export default CategoryDetailLazy;
