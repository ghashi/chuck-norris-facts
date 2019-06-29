import styled from 'styled-components';
import { FontSize, Spacing, Color, FontWeight } from '../obj.constants';

export const HeaderStyled = styled.div`
  border-bottom: 1px solid ${Color.GrayLight};
  background: ${Color.White};
  padding: ${Spacing.Medium};
  position: fixed;
`;

export const HeaderTitleStyled = styled.div`
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Bold};
  text-transform: uppercase;
  letter-spacing: 2px;
`;
