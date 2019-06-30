import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyled } from './atomic/obj.globals';
import Layout from './atomic/org.layout/layout.component';
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
          <Route path={homeRoutePath} exact component={HomeLazy} />
          <Route path={categoryDetailRoutePath} component={CategoryLazy} />
        </Layout>
      </Router>
    </>
  );
};

export default App;
