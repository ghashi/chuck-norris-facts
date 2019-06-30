import React, { lazy, Suspense } from 'react';
import { RouteChildrenProps } from 'react-router';

export const categoryDetailRoutePath = `/category/:id`;
interface CategoryLazyParams {
  id: string;
}
export const getCategoryDetailUrlPath = (id: string) => `/category/${id}`;

const CategoryPage = lazy(() => import('./category.page'));

// TODO: Improve loading
const renderLoader = () => <p>Loading</p>;

interface CategoryLazyProps extends RouteChildrenProps<CategoryLazyParams> {}

const CategoryLazy: React.FunctionComponent<CategoryLazyProps> = props => {
  const name = props.match ? props.match.params.id : '';
  return (
    <Suspense fallback={renderLoader()}>
      <CategoryPage name={name} />
    </Suspense>
  );
};

export default CategoryLazy;
