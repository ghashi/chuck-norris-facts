import React from 'react';
import {
  ButtonContentStyled,
  ButtonSpinnerStyled,
  ButtonSpinnerWrapperStyled,
  ButtonStyled
} from './button.component.style';

export interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => any;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { loading, disabled, type, ...others } = props;

  return (
    <ButtonStyled disabled={loading || disabled} {...others}>
      <ButtonContentStyled loading={loading}>
        {props.children}
      </ButtonContentStyled>
      <ButtonSpinnerWrapperStyled loading={loading}>
        <ButtonSpinnerStyled />
      </ButtonSpinnerWrapperStyled>
    </ButtonStyled>
  );
};

export default Button;

Button.defaultProps = {
  disabled: false,
  loading: false,
  type: 'button'
};
