import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Body } from './typography.component';

const stories = storiesOf('Atoms', module);

stories.add('Typography', () => (
  <div>
    <Body> This is a body</Body>
  </div>
));
