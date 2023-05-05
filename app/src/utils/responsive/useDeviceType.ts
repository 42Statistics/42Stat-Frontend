import { useMediaQuery } from 'react-responsive';
import type { Device } from '../types/Device';

const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });
const useIsTablet = () => useMediaQuery({ minWidth: 768, maxWidth: 1279 });
const useIsMobile = () => useMediaQuery({ maxWidth: 767 });

export const useDeviceType = (): Device | null => {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  if (isDesktop) {
    return 'desktop';
  }
  if (isTablet) {
    return 'tablet';
  }
  if (isMobile) {
    return 'mobile';
  }
  return null;
};
