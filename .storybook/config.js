import { addDecorator, configure } from '@storybook/react';
import { GlobalStyled } from '../src/atomic/obj.globals';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const req = require.context('../src/', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => {
  return (
    <div>
      <GlobalStyled />
      {story()}
    </div>
  );
});
addDecorator(withKnobs);

configure(loadStories, module);
