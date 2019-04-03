import { storiesOf } from '@storybook/html';
import markdown from './notes/index.md';
import './index.scss';

storiesOf(`theme|colors`, module)
  .add('palette', () => `
    <div class="palette">
      <div class="colors brand">
        <span>brand</span>
        <span>#2fc97a</span>
      </div>
      <div class="colors primary">
        <span>primary</span>
        <span>#ff7867</span>
      </div>
    </div>
  `, { notes: { markdown } })
