import styled from 'styled-components';
import { headerHeight } from '../atm.header/header.style';
import { footerHeight } from '../atm.footer/footer.style';

export const LayoutStyled = styled.div``;
export const LayoutContentStyled = styled.div`
  min-height: calc(100vh - ${headerHeight} - ${footerHeight});
`;
