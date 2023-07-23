import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { HelmetProvider } from 'react-helmet-async';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Provider;
