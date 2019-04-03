import { storiesOf } from '@storybook/html';
import markdown from './notes/primary.md';
import './primary.scss';

storiesOf(`ui|buttons`, module)
  .add('Primary Button', () => '<button class="btn">버튼</button>', { notes: { markdown } })
