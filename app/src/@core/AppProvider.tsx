import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloProvider from './providers/ApolloProvider';
import DayjsProvider from './providers/DayjsProvider';
import ErrorBoundaryProvider from './providers/ErrorBoundaryProvider';
import HelmetProvider from './providers/HelmetProvider';
import ModalProvider from './providers/ModalProvider';
import { ScrollToTop } from './providers/ScrollToTop';
import ThemeProvider from './providers/ThemeProvider';

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
