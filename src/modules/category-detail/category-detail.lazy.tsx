import * as React from 'react';
import { RouteChildrenProps } from 'react-router';
import { REACT_APP_SITE_URL } from '../..';
import { PageLoadingSpinner } from '../../atomic/atm.page-loading/page-loading.style';
import { SEO } from '../../atomic/obj.seo/seo.component';

export const categoryDetailRoutePath = `/category/:id`;
interface CategoryDetailLazyParams {
  id: string;
}
export const getCategoryDetailUrlPath = (id: string) => `/category/${id}`;

const CategoryDetailPage = React.lazy(() => import('./category-detail.page'));

interface CategoryDetailLazyProps
  extends RouteChildrenProps<CategoryDetailLazyParams> {}

const CategoryDetailLazy: React.FunctionComponent<
  CategoryDetailLazyProps
> = props => {
  const name = props.match ? props.match.params.id : '';
  const currentUrl = `${REACT_APP_SITE_URL}${props.location.pathname}`;
  return (
    <>
      <SEO
        socialMedia={{
          url: currentUrl,
          title: `${name} facts`,
          image: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          imageAlt: 'Chuck Norris avatar',
          description: `Learn ${name} facts about Him!`
        }}
      />
      <React.Suspense fallback={<PageLoadingSpinner />}>
        <CategoryDetailPage name={name} />
      </React.Suspense>
    </>
  );
};

export default CategoryDetailLazy;
