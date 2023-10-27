import { Global } from '@emotion/react';
import { useAtomValue } from 'jotai';

import { AppProvider } from '@core/AppProvider';
import { appRouter } from '@core/appRouter';
import { global } from '@core/styles/global';
import { reset } from '@core/styles/reset';
import { paletteAtom } from '@shared/atoms/paletteAtom';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const palette = useAtomValue(paletteAtom);

  return (
    <AppProvider>
      <Global styles={[reset, global(palette)]} />
      <RouterProvider router={appRouter} />
    </AppProvider>
  );
};

export default App;
