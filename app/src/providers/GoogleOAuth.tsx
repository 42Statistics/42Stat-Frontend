import { GoogleOAuthProvider } from '@react-oauth/google';

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GAPI_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default Provider;
