import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './button.component';

storiesOf('Atoms', module).add('Buttons', () => {
  return (
    <div>
      <Button
        onClick={action('click')}
        loading={boolean('Loading', false)}
        disabled={boolean('Disabled', false)}
      >
        {text('Text', 'Button label')}
      </Button>
    </div>
  );
});
