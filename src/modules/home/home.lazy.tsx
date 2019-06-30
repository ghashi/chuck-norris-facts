import * as React from 'react';

export const homeRoutePath = `/`;
export const getHomeUrlPath = `/`;

const HomePage = React.lazy(() => import('./home.page'));

// TODO: Improve loading
const renderLoader = () => <p>Loading</p>;

interface HomeLazyProps {}

const HomeLazy: React.FunctionComponent<HomeLazyProps> = props => {
  return (
    <React.Suspense fallback={renderLoader()}>
      <HomePage />
    </React.Suspense>
  );
};

export default HomeLazy;
