import * as React from 'react';
import Footer from '../atm.footer/footer.component';
import Header from '../atm.header/header.component';
import { LayoutContentStyled, LayoutStyled } from './layout.style';

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  return (
    <LayoutStyled>
      <Header />
      <LayoutContentStyled>{props.children}</LayoutContentStyled>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
