import styled, { keyframes } from 'styled-components';
import { animationTime } from '../obj.constants';

export interface FadeProps {
  show: boolean;
  duration?: number;
}

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

interface ForcedFadeProps {
  show: boolean;
  duration?: string;
}

export const Fade = styled.div`
  border: 0;
  pointer-events: ${(props: FadeProps) => (props.show ? 'inherit' : 'none')};
  animation: ${(props: FadeProps) => (props.show ? fadeIn : fadeOut)}
    ${(props: FadeProps) => props.duration || animationTime} linear forwards;
`;
