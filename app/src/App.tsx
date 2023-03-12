import { Global } from '@emotion/react';
import { reset } from './styles/reset';
import { AppRoutes } from './routes';
import { AppProvider } from './providers';
import { global } from './styles/global';

function App() {
  return (
    <AppProvider>
      <Global styles={reset} />
      <Global styles={global} />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
