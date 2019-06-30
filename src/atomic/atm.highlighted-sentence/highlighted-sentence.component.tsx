import * as React from 'react';
import { HighlightedSentenceStyled } from './highlighted-sentence.style';

interface IHighlightedSentenceProps {}

const HighlightedSentence: React.FunctionComponent<
  IHighlightedSentenceProps
> = props => {
  return (
    <HighlightedSentenceStyled>{props.children}</HighlightedSentenceStyled>
  );
};

export default HighlightedSentence;
