import { addParameters, addDecorator, configure } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import inflearnTheme from './inflearnTheme';

addParameters({
  options: {
    theme: inflearnTheme,
  },
});

addDecorator(centered);

function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
