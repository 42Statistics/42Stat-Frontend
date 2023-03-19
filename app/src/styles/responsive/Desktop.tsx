import { PropsWithChildren } from 'react';
import { getDevice } from './getDevice';

export const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = getDevice() === 'desktop';

  return <>{isDesktop ? children : null}</>;
};
