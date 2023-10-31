import { HelmetProvider } from 'react-helmet-async';

import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Provider;
