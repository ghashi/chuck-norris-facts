import styled from 'styled-components';
import { Spacing } from '../obj.constants';
import { cardStyle } from '../obj.mixin';

export const ErrorPlaceholderStyled = styled.div`
  margin: ${Spacing.Medium} 0;
  display: inline-grid;
  justify-items: center;
  grid-gap: ${Spacing.Medium};
  ${cardStyle}
  padding: ${Spacing.Medium};
`;
