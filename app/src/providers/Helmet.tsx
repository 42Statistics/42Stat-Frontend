import { HelmetProvider } from 'react-helmet-async';

const Provider = ({ children }: React.PropsWithChildren) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Provider;
