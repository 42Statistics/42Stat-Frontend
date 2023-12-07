import { RouterProvider } from 'react-router-dom';

import { Global } from '@emotion/react';

import { AppProvider } from '@core/AppProvider';
import { appRouter } from '@core/appRouter';
import { global } from '@core/styles/global';
import { reset } from '@core/styles/reset';

const App = () => {
  return (
    <AppProvider>
      <Global styles={[reset, global]} />
      <RouterProvider router={appRouter} />
    </AppProvider>
  );
};

export default App;
