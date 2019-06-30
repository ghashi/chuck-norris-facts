import styled, { keyframes } from 'styled-components';
import {
  Color,
  FontSize,
  FontWeight,
  Spacing,
  BrandColor
} from '../obj.constants';
import { highlightStyle } from '../obj.mixin';
import { ButtonProps } from './button.component';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';

export const buttonHeight = '48px';

export const ButtonStyled = styled.button`
  position: relative;
  width: auto;
  height: ${buttonHeight};
  padding: 0 ${Spacing.XLarge};
  width: 'auto';
  text-align: 'center';
  font-weight: ${FontWeight.SemiBold};
  font-size: ${FontSize.Medium};
  letter-spacing: 1px;
  text-decoration: none;
  ${highlightStyle}
  cursor: pointer;
  opacity: ${(props: ButtonProps) =>
    props.disabled || props.loading ? 0.5 : 1};
  display: inline-flex;
  align-items: center;
  text-align: center;

  min-height: ${buttonHeight};

  background-color: ${(props: ButtonProps) =>
    props.outline ? Color.White : Color.Primary};
  color: ${(props: ButtonProps) =>
    props.outline ? BrandColor.KenyanCopper : Color.White};
  border-color: ${(props: ButtonProps) =>
    props.outline ? BrandColor.KenyanCopper : Color.Primary};
  border-style: solid;
  border-radius: 4px;

  ${(props: ButtonProps) =>
    !props.disabled && !props.loading
      ? `
  &:hover {
    background-color: ${
      props.outline ? BrandColor.Snow : BrandColor.ChineseRed
    };
  }
  &:active {
    background-color: ${
      props.outline ? BrandColor.Snow : BrandColor.KenyanCopper
    };
    }
  `
      : ''}

  /* this is useful when its father is pointer-events: none */
  pointer-events: auto;

  &:focus {
    outline: 0;
  }
`;

export const ButtonContentStyled = styled.div`
  transition: all 0.2s ease-in-out;
  /* https://github.com/styled-components/styled-components/issues/1198#issuecomment-336621217 */
  opacity: ${(props: { loading?: number }) => (props.loading ? 0 : 1)};
  font-stretch: 100%;
  width: 100%;
`;

const loadingSize = 36;
export const ButtonSpinnerWrapperStyled = styled.span`
  /* https://github.com/styled-components/styled-components/issues/1198#issuecomment-336621217 */
  display: ${(props: { loading?: number }) =>
    props.loading ? 'inline-block' : 'none'};
  position: absolute;
  right: calc(50% - ${loadingSize / 2}px);
  top: calc(50% - ${loadingSize / 2}px);
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const ButtonSpinnerStyled = styled(LoaderAlt).attrs({
  size: loadingSize
})`
  animation: ${rotate} 2s linear infinite;
`;
