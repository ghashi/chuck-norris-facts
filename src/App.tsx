import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyled } from './atomic/obj.globals';
import Layout from './atomic/org.layout/layout.component';
import Page404Page from './modules/404/404.page';
import CategoryLazy, {
  categoryDetailRoutePath
} from './modules/category-detail/category-detail.lazy';
import HomeLazy, { homeRoutePath } from './modules/home/home.lazy';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Layout>
          <Switch>
            <Route path={homeRoutePath} exact component={HomeLazy} />
            <Route path={categoryDetailRoutePath} component={CategoryLazy} />
            <Route component={Page404Page} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
