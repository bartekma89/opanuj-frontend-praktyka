import ReactDOM from 'react-dom/client';

import Characters from './Characters.container';

const rootElement = document.getElementById('app')!;
if (!rootElement?.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<Characters />);
}
