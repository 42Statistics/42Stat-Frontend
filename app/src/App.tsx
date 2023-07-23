import { Global } from '@emotion/react';
import { global } from '@shared/styles/global';
import { reset } from '@shared/styles/reset';
import { AppProvider } from './@shared/AppProvider';
import { AppRoutes } from './@shared/AppRoutes';

function App() {
  return (
    <AppProvider>
      <Global styles={[reset, global]} />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
