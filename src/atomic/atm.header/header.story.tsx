import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Header from './header.component';

const stories = storiesOf('Atoms', module);

stories.add('Header', () => <Header />);
