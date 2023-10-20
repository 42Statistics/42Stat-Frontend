import { ErrorBoundary } from 'react-error-boundary';

import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

const Provider = ({ children }: PropsWithReactElementChildren) => {
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
      {children}
    </ErrorBoundary>
  );
};

export default Provider;
