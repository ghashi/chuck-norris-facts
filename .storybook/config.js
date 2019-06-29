import { addDecorator, configure } from '@storybook/react';
import { GlobalStyled } from '../src/atomic/obj.globals';
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

configure(loadStories, module);
