import { AppRoutes } from '@core/AppRoutes';
import { global } from '@core/styles/global';
import { reset } from '@core/styles/reset';
import { Global } from '@emotion/react';
import { AppProvider } from './@core/AppProvider';

function App() {
  return (
    <AppProvider>
      <Global styles={[reset, global]} />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
