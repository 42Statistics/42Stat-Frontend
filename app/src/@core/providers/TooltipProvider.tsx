import { Outlet } from 'react-router-dom';

import { Tooltip } from '@shared/ui-kit';

export const TooltipProvider = () => {
  return (
    <>
      <Tooltip />
      <Outlet />
    </>
  );
};
