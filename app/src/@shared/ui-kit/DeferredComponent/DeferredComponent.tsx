import { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';
import { useEffect, useState } from 'react';

// https://tech.kakaopay.com/post/skeleton-ui-idea/
export const DeferredComponent = ({ children }: PropsWithReactNodeChildren) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    // 200ms 지난 후 children Render
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
};
