import { PropsWithChildren } from 'react';
import { getDevice } from './getDevice';

export const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = getDevice() === 'mobile';

  return <>{isMobile ? children : null}</>;
};
