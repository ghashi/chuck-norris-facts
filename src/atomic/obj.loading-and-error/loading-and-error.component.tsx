import * as React from 'react';
import { LoadingAndErroForegroundStyled } from './loading-and-error.style';

interface LoadingPartProps {}
export const LoadingAndErrorLoadingPart: React.FunctionComponent<
  LoadingPartProps
> = React.memo(props => <>{props.children}</>);

interface ErrorPartProps {}
export const LoadingAndErrorErrorPart: React.FunctionComponent<
  ErrorPartProps
> = React.memo(props => <>{props.children}</>);

interface ContentPartProps {}
export const LoadingAndErrorContentPart: React.FunctionComponent<
  ContentPartProps
> = props => <>{props.children}</>;

interface LoadingAndErrorProps {
  loading: boolean;
  /** set this so the component knows how to handle errors and loading */
  isScreenPopulated: boolean;
  error?: boolean;
  /**
   * this component children should be wrapper with
   * <LoadingAndErrorLoadingPart>
   * <LoadingAndErrorErrorPart>
   * <LoadingAndErrorContentPart>
   */
  children: any;
}

export const LoadingAndError: React.FunctionComponent<
  LoadingAndErrorProps
> = props => {
  return (
    <>
      {props.loading && !props.isScreenPopulated && getLoading(props)}
      {props.loading && props.isScreenPopulated && (
        <LoadingAndErroForegroundStyled />
      )}
      {props.error ? getError(props) : getContent(props)}
    </>
  );
};

function getLoading(props: LoadingAndErrorProps) {
  const loading = React.Children.map(props.children, (child: any) => {
    return child && child.type === LoadingAndErrorLoadingPart && child;
  });
  return loading;
}

function getContent(props: LoadingAndErrorProps) {
  if (!props.isScreenPopulated) {
    return null;
  }

  const wrapped = React.Children.map(props.children, (child: any) => {
    return child && child.type === LoadingAndErrorContentPart && child;
  });
  return wrapped;
}

function getError(props: LoadingAndErrorProps) {
  if (props.isScreenPopulated) {
    return getContent(props);
  }

  console.trace('getViewForError -> props', props);

  const wrapped = React.Children.map(props.children, (child: any) => {
    return child && child.type === LoadingAndErrorErrorPart && child;
  });
  return wrapped;
}
