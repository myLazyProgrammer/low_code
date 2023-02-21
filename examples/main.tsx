import { createRoot } from 'react-dom/client';
import App from './src/App';
import { test } from '@low_code/runtime';

test();

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App/>);