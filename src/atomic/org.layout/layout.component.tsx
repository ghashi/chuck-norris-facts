import * as React from 'react';
import Footer from '../atm.footer/footer.component';
import Header from '../atm.header/header.component';
import { ErrorBoundary } from '../obj.error-boundary/error-boundary.component';
import { LayoutContentStyled, LayoutStyled } from './layout.style';

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  return (
    <LayoutStyled>
      <Header />
      <ErrorBoundary>
        <LayoutContentStyled>{props.children}</LayoutContentStyled>
      </ErrorBoundary>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
