import ReactDOM from 'react-dom/client';

import FlightScanner from './flight-scanner.container';

const rootElement = document.getElementById('app')!;
if (!rootElement?.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<FlightScanner />);
}
