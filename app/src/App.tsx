import { Global } from '@emotion/react';
import { global } from '@shared/styles/global';
import { reset } from '@shared/styles/reset';
import { AppProvider } from './AppProvider';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <AppProvider>
      <Global styles={[reset, global]} />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
