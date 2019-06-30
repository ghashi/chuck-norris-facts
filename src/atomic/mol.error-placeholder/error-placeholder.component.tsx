import * as React from 'react';
import { ErrorOutline } from 'styled-icons/material/ErrorOutline';
import { ErrorPlaceholderStyled } from './error-placeholder.style';
import { H3 } from '../atm.typography';
import Button from '../atm.button/button.component';

interface ErrorPlaceholderProps {
  title?: string;
  buttonTitle?: string;
  onClick: () => void;
}

const ErrorPlaceholder: React.FunctionComponent<
  ErrorPlaceholderProps
> = props => {
  return (
    <ErrorPlaceholderStyled>
      <ErrorOutline size={60} />
      <H3>{props.title}</H3>
      <Button onClick={props.onClick}>{props.buttonTitle}</Button>
    </ErrorPlaceholderStyled>
  );
};
ErrorPlaceholder.defaultProps = {
  title: 'Sorry! An error ocurred.',
  buttonTitle: 'Try again'
};

export default ErrorPlaceholder;
