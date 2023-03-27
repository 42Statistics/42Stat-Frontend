import { PropsWithChildren } from 'react';
import { useDeviceType } from './useDeviceType';

export const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = useDeviceType() === 'desktop';
  return <>{isDesktop ? children : null}</>;
};

export const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useDeviceType() === 'mobile';
  return <>{isMobile ? children : null}</>;
};

export const Tablet = ({ children }: PropsWithChildren) => {
  const isTablet = useDeviceType() === 'tablet';
  return <>{isTablet ? children : null}</>;
};

export const AboveTablet = ({ children }: PropsWithChildren) => {
  const device = useDeviceType();
  const isAboveTablet = device === 'desktop' || device === 'tablet';
  return <>{isAboveTablet ? children : null}</>;
};
