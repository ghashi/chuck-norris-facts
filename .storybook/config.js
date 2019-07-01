import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyled } from '../src/atomic/obj.globals';

const req = require.context('../src/', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => {
  return (
    <Router>
      <GlobalStyled />
      {story()}
    </Router>
  );
});
addDecorator(withKnobs);

configure(loadStories, module);
