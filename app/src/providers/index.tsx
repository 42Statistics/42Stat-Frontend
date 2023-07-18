import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import DayjsProvider from './DayjsProvider';
import ErrorBoundaryProvider from './ErrorBoundaryProvider';
import HelmetProvider from './HelmetProvider';
import ModalProvider from './ModalProvider';
import { ScrollToTop } from './ScrollToTop';
import ThemeProvider from './ThemeProvider';

export const AppProvider = ({ children }: PropsWithReactElementChildren) => {
  return (
    <ErrorBoundaryProvider>
      <ApolloProvider>
        <HelmetProvider>
          <DayjsProvider>
            <ThemeProvider>
              <Router>
                <ScrollToTop>
                  <ModalProvider>{children}</ModalProvider>
                </ScrollToTop>
              </Router>
            </ThemeProvider>
          </DayjsProvider>
        </HelmetProvider>
      </ApolloProvider>
    </ErrorBoundaryProvider>
  );
};
