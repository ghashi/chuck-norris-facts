import * as React from 'react';
import {
  ButtonContentStyled,
  ButtonSpinnerStyled,
  ButtonSpinnerWrapperStyled,
  ButtonStyled
} from './button.component.style';

export interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  onClick?: () => any;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { loading, disabled, outline, type, ...others } = props;

  return (
    <ButtonStyled outline={outline} disabled={loading || disabled} {...others}>
      <ButtonContentStyled loading={loading ? 1 : 0}>
        {props.children}
      </ButtonContentStyled>
      <ButtonSpinnerWrapperStyled loading={loading ? 1 : 0}>
        <ButtonSpinnerStyled />
      </ButtonSpinnerWrapperStyled>
    </ButtonStyled>
  );
};

export default Button;

Button.defaultProps = {
  disabled: false,
  loading: false,
  outline: false,
  type: 'button'
};
