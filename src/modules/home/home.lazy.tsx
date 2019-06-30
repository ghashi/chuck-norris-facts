import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import { REACT_APP_SITE_URL } from '../..';
import { SEO } from '../../atomic/obj.seo/seo.component';

export const homeRoutePath = `/`;
export const getHomeUrlPath = `/`;

const HomePage = React.lazy(() => import('./home.page'));

// TODO: Improve loading
const renderLoader = () => <p>Loading</p>;

interface HomeLazyProps extends RouteChildrenProps<any> {}

const HomeLazy: React.FunctionComponent<HomeLazyProps> = props => {
  const currentUrl = `${REACT_APP_SITE_URL}${props.location.pathname}`;
  return (
    <>
      <SEO
        socialMedia={{
          url: currentUrl,
          title: 'Chuck Norris Facts',
          image: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          imageAlt: 'Chuck Norris avatar',
          description: 'Learn something about Him!'
        }}
      />
      <React.Suspense fallback={renderLoader()}>
        <HomePage />
      </React.Suspense>
    </>
  );
};

export default HomeLazy;
