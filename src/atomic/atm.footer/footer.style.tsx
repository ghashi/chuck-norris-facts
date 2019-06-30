import styled from 'styled-components';
import { BrandColor, Color, Spacing } from '../obj.constants';

export const FooterStyled = styled.div`
  border-bottom: 1px solid ${Color.GrayLight};
  background: ${BrandColor.KenyanCopper};
  padding: ${Spacing.Small};
`;

export const FooterContentStyled = styled.div`
  color: ${Color.White};
`;
