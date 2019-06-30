import { storiesOf } from '@storybook/react';
import * as React from 'react';
import HighlightedSentence from './highlighted-sentence.component';

const stories = storiesOf('Atoms', module);

stories.add('Highlighted sentence', () => (
  <HighlightedSentence>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet
    libero libero, id tempus nulla ultrices sed. Donec dignissim, velit at
    convallis interdum, nisl nibh blandit arcu
  </HighlightedSentence>
));
