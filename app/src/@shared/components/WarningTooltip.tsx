import { useTheme } from '@emotion/react';

import { ReactComponent as MdWarning } from '@shared/assets/icon/md-warning.svg';
import { Tooltip, type TooltipPosition } from '@shared/ui-kit';

type WarningTooltipProps = {
  position?: TooltipPosition;
  text: string;
};

export const WarningTooltip = ({
  position = 'top',
  text,
}: WarningTooltipProps) => {
  const theme = useTheme();

  return (
    <Tooltip.Container>
      <MdWarning width={16} height={16} fill={theme.colors.mono.red} />
      <Tooltip position={position}>{text}</Tooltip>
    </Tooltip.Container>
  );
};
