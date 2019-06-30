import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./home.page'));

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
