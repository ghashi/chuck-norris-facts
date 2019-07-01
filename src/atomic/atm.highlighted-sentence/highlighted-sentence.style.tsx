import styled from 'styled-components';
import { BrandColor, FontSize, Spacing } from '../obj.constants';

export const HighlightedSentenceStyled = styled.p`
  background: ${BrandColor.Snow};
  font-size: ${FontSize.Large};
  line-height: 1.5;
  padding: ${Spacing.Large};
  margin: ${Spacing.Medium} 0;
  border-radius: 4px;
`;
