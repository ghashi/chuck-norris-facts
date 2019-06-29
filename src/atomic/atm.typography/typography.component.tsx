import styled from 'styled-components';
import {
  FontSize,
  Color,
  FontFamily,
  FontWeight,
  Spacing
} from '../obj.constants';

export const H1FontSize = FontSize.XXLarge;
export const H1 = styled.h1`
  color: ${Color.GrayXDark};
  font-size: ${H1FontSize};
  font-weight: ${FontWeight.Normal};
  font-weight: ${FontWeight.Bold};
  margin: 0;
`;

export const H1Light = styled(H1)`
  color: ${Color.White};
`;

export const H2FontSize = FontSize.XLarge;
export const H2 = styled.h2`
  color: ${Color.GrayXDark};
  font-size: ${H2FontSize};
  font-weight: ${FontWeight.Bold};
  margin: 0;
`;

export const H3 = styled.h3`
  color: ${Color.GrayXDark};
  font-size: ${FontSize.Large};
  font-weight: ${FontWeight.Bold};
  margin: 0;
`;

export const H4FontSize = FontSize.Large;
export const H4 = styled.h4`
  color: ${Color.GrayXDark};
  font-size: ${H4FontSize};
  font-weight: ${FontWeight.Normal};
  margin: 0;
`;

export const Bold = styled.span`
  font-weight: ${FontWeight.Bold};
`;

export const BodyFontSize = FontSize.Medium;
export const Body = styled.p`
  color: ${Color.GrayDark};
  margin: 0;
  font-size: ${BodyFontSize};
  font-weight: ${FontWeight.Normal};
`;
