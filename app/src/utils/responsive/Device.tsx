import { useDeviceType } from './useDeviceType';

export const Desktop = ({ children }: React.PropsWithChildren) => {
  const isDesktop = useDeviceType() === 'desktop';
  return <>{isDesktop ? children : null}</>;
};

export const Mobile = ({ children }: React.PropsWithChildren) => {
  const isMobile = useDeviceType() === 'mobile';
  return <>{isMobile ? children : null}</>;
};

export const Tablet = ({ children }: React.PropsWithChildren) => {
  const isTablet = useDeviceType() === 'tablet';
  return <>{isTablet ? children : null}</>;
};

export const AboveTablet = ({ children }: React.PropsWithChildren) => {
  const device = useDeviceType();
  const isAboveTablet = device === 'desktop' || device === 'tablet';
  return <>{isAboveTablet ? children : null}</>;
};

export const BelowTablet = ({ children }: React.PropsWithChildren) => {
  const device = useDeviceType();
  const isBelowTablet = device === 'mobile' || device === 'tablet';
  return <>{isBelowTablet ? children : null}</>;
};
