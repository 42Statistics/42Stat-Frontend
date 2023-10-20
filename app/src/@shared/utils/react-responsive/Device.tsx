import type { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

export const Desktop = ({ children }: PropsWithReactNodeChildren) => {
  const isDesktop = useDeviceType() === 'desktop';
  return <>{isDesktop ? children : null}</>;
};

export const Mobile = ({ children }: PropsWithReactNodeChildren) => {
  const isMobile = useDeviceType() === 'mobile';
  return <>{isMobile ? children : null}</>;
};

export const Tablet = ({ children }: PropsWithReactNodeChildren) => {
  const isTablet = useDeviceType() === 'tablet';
  return <>{isTablet ? children : null}</>;
};

export const TabletAndAbove = ({ children }: PropsWithReactNodeChildren) => {
  const device = useDeviceType();
  const isTabletAndAbove = device === 'desktop' || device === 'tablet';
  return <>{isTabletAndAbove ? children : null}</>;
};

export const TabletAndBelow = ({ children }: PropsWithReactNodeChildren) => {
  const device = useDeviceType();
  const isTabletAndBelow = device === 'mobile' || device === 'tablet';
  return <>{isTabletAndBelow ? children : null}</>;
};
