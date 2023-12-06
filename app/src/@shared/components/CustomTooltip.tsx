import { useTheme } from '@emotion/react';

import { ReactComponent as MdInfo } from '@shared/assets/icon/md-info.svg';
import { ReactComponent as MdWarning } from '@shared/assets/icon/md-warning.svg';
import { Tooltip, type TooltipPosition } from '@shared/ui-kit';

type CustomTooltipProps = {
  type?: 'info' | 'warning';
  position?: TooltipPosition;
  size?: string;
  text: string;
};

export const CustomTooltip = ({
  type = 'info',
  position = 'top',
  size = '14',
  text,
}: CustomTooltipProps) => {
  const theme = useTheme();

  const Icon = type === 'info' ? MdInfo : MdWarning;
  const iconColor =
    type === 'info' ? theme.colors.mono.gray500 : theme.colors.semantic.warning;

  return (
    <Tooltip.Container>
      <Icon width={size} height={size} fill={iconColor} />
      <Tooltip position={position}>{text}</Tooltip>
    </Tooltip.Container>
  );
};
