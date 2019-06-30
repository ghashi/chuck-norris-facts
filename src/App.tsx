import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyled } from './atomic/obj.globals';
import Layout from './atomic/org.layout/layout.component';
import HomeLazy from './modules/home/home.lazy';

function CotegoryDetail() {
  return <h2>About</h2>;
}

const App: React.FC = () => {
  return (
    <>
      <GlobalStyled />
      <Layout>
        <Router>
          <Route path="/" exact component={HomeLazy} />
          <Route path="/category-detail/" component={CotegoryDetail} />
        </Router>
      </Layout>
    </>
  );
};

export default App;
