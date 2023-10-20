import { Global } from '@emotion/react';

import { AppProvider } from '@core/AppProvider';
import { AppRoutes } from '@core/AppRoutes';
import { global } from '@core/styles/global';
import { reset } from '@core/styles/reset';

const App = () => {
  return (
    <AppProvider>
      <Global styles={[reset, global]} />
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
