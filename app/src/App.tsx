import { Global } from '@emotion/react';
import { reset } from './styles/reset';
import { AppRoutes } from './routes';
import { AppProvider } from './providers';

function App() {
  return (
    <AppProvider>
      <Global styles={reset} />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
