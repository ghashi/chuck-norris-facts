import React, { lazy, Suspense } from 'react';

export const homeRoutePath = `/`;
export const getHomeUrlPath = `/`;

const HomePage = lazy(() => import('./home.page'));

// TODO: Improve loading
const renderLoader = () => <p>Loading</p>;

interface HomeLazyProps {}

const HomeLazy: React.FunctionComponent<HomeLazyProps> = props => {
  return (
    <Suspense fallback={renderLoader()}>
      <HomePage />
    </Suspense>
  );
};

export default HomeLazy;
