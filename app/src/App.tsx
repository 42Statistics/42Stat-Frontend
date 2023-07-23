import { Global } from '@emotion/react';
import { AppProvider } from './AppProvider';
import { AppRoutes } from './AppRoutes';
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
