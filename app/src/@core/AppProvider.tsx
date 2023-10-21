import ApolloProvider from '@core/providers/ApolloProvider';
import ErrorBoundaryProvider from '@core/providers/ErrorBoundaryProvider';
import HelmetProvider from '@core/providers/HelmetProvider';
import ModalProvider from '@core/providers/ModalProvider';
import { ScrollToTop } from '@core/providers/ScrollToTop';
import ThemeProvider from '@core/providers/ThemeProvider';
import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

export const AppProvider = ({ children }: PropsWithReactElementChildren) => {
  return (
    <ErrorBoundaryProvider>
      <ApolloProvider>
        <HelmetProvider>
          <ThemeProvider>
            <ScrollToTop>
              <ModalProvider>{children}</ModalProvider>
            </ScrollToTop>
          </ThemeProvider>
        </HelmetProvider>
      </ApolloProvider>
    </ErrorBoundaryProvider>
  );
};
