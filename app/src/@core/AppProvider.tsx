import ApolloProvider from '@core/providers/ApolloProvider';
import ErrorBoundaryProvider from '@core/providers/ErrorBoundaryProvider';
import HelmetProvider from '@core/providers/HelmetProvider';
import ThemeProvider from '@core/providers/ThemeProvider';
import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

export const AppProvider = ({ children }: PropsWithReactElementChildren) => {
  return (
    <ErrorBoundaryProvider>
      <ApolloProvider>
        <HelmetProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </HelmetProvider>
      </ApolloProvider>
    </ErrorBoundaryProvider>
  );
};
