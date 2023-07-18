import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { HelmetProvider } from 'react-helmet-async';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Provider;
