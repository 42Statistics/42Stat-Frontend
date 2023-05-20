import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import DayjsProvider from './DayjsProvider';
import GoogleOAuthProvider from './GoogleOAuthProvider';
import HelmetProvider from './HelmetProvider';
import { ScrollToTop } from './ScrollToTop';
import ThemeProvider from './ThemeProvider';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ErrorBoundary
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
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
            <DayjsProvider>
              <ThemeProvider>
                <Router>
                  <ScrollToTop>{children}</ScrollToTop>
                </Router>
              </ThemeProvider>
            </DayjsProvider>
          </HelmetProvider>
        </GoogleOAuthProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
};
