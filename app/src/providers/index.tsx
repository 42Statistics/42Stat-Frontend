import { BrowserRouter as Router } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import DayjsProvider from './DayjsProvider';
import ErrorBoundaryProvider from './ErrorBoundaryProvider';
import HelmetProvider from './HelmetProvider';
import { ScrollToTop } from './ScrollToTop';
import ThemeProvider from './ThemeProvider';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ErrorBoundaryProvider>
      <ApolloProvider>
        <HelmetProvider>
          <DayjsProvider>
            <ThemeProvider>
              <Router>
                <ScrollToTop>{children}</ScrollToTop>
              </Router>
            </ThemeProvider>
          </DayjsProvider>
        </HelmetProvider>
      </ApolloProvider>
    </ErrorBoundaryProvider>
  );
};
