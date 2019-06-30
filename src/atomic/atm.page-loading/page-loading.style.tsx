import styled from 'styled-components';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';
import { rotateAnimation } from '../obj.animation/animation.component.style';

const size = 60;
export const PageLoadingSpinner = styled(LoaderAlt).attrs({
  size
})`
  position: absolute;
  top: calc(50% - ${size / 2}px);
  left: calc(50% - ${size / 2}px);
  animation: ${rotateAnimation} 2s linear infinite;
`;
