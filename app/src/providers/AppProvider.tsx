import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import GoogleOAuthProvider from './GoogleOAuthProvider';
import HelmetProvider from './HelmetProvider';
import ThemeProvider from './ThemeProvider';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ErrorBoundary
      fallback={
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <p>💥 Rendering Error</p>
            <p>Please see the console :(</p>
          </div>
        </div>
      }
    >
      <ApolloProvider>
        <GoogleOAuthProvider>
          <HelmetProvider>
            <ThemeProvider>
              <Router>{children}</Router>
            </ThemeProvider>
          </HelmetProvider>
        </GoogleOAuthProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
};
