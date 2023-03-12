import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

const Provider = ({ children }: PropsWithChildren) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Provider;
