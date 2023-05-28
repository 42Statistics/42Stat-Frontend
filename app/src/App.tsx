import { Global } from '@emotion/react';
import { AppProvider } from './providers';
import { AppRoutes } from './routes';
import { global } from './styles/global';
import { reset } from './styles/reset';

function App() {
  return (
    <AppProvider>
      <Global styles={[reset, global]} />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
