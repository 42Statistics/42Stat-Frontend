import { GoogleOAuthProvider } from '@react-oauth/google';
import { PropsWithChildren } from 'react';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GAPI_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default Provider;
