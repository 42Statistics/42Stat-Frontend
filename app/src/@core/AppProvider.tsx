import ApolloProvider from '@core/providers/ApolloProvider';
import ErrorBoundaryProvider from '@core/providers/ErrorBoundaryProvider';
import HelmetProvider from '@core/providers/HelmetProvider';
import ModalProvider from '@core/providers/ModalProvider';
import ThemeProvider from '@core/providers/ThemeProvider';
import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

export const AppProvider = ({ children }: PropsWithReactElementChildren) => {
  return (
    <ErrorBoundaryProvider>
      <ApolloProvider>
        <HelmetProvider>
          <ThemeProvider>
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
        </HelmetProvider>
      </ApolloProvider>
    </ErrorBoundaryProvider>
  );
};
