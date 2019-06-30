import styled from 'styled-components';
import { H3 } from '../../../atomic/atm.typography';
import { animationTime, Color, Spacing } from '../../../atomic/obj.constants';
import { cardStyle } from '../../../atomic/obj.mixin';

export const CategoryListStyled = styled.ul`
  display: grid;
  grid-gap: ${Spacing.Medium};
  grid-template-columns: repeat(2, 1fr);
  @media all and (min-width: 48em) {
    grid-template-columns: repeat(5, 1fr);
  }
  list-style: none;
  padding: 0;
`;

export const CategoryListItemContentStyled = styled(H3)`
  padding: ${Spacing.Medium};
`;
export const CategoryListItemStyled = styled.li`
  ${cardStyle}
  text-align: center;

  transition: all ${animationTime};

  :hover {
    background: ${Color.Primary};
    ${CategoryListItemContentStyled} {
      color: ${Color.White};
    }
  }
`;
