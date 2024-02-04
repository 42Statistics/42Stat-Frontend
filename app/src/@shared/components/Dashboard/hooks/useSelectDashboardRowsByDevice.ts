import type { DashboardProps } from '@shared/types/Dashboard';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

type UseSelectDashboardRowsByDeviceProps = Omit<DashboardProps, 'contents'>;

export const useSelectDashboardRowsByDevice = ({
  defaultRows,
  desktopRows,
  tabletRows,
  mobileRows,
}: UseSelectDashboardRowsByDeviceProps) => {
  const device = useDeviceType();

  if (device === 'desktop' && desktopRows !== undefined) {
    return { rows: desktopRows };
  }

  if (device === 'tablet' && tabletRows !== undefined) {
    return { rows: tabletRows };
  }

  if (device === 'mobile' && mobileRows !== undefined) {
    return { rows: mobileRows };
  }

  return { rows: defaultRows };
};
