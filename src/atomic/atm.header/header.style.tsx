import styled from 'styled-components';
import {
  FontSize,
  Spacing,
  Color,
  FontWeight,
  BrandColor
} from '../obj.constants';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid ${Color.GrayLight};
  background: ${BrandColor.Snow};
  padding: ${Spacing.Medium};
`;

export const HeaderTitleStyled = styled.a`
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Bold};
  text-transform: uppercase;
  letter-spacing: 2px;
`;
