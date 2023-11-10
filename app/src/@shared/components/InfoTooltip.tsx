import { useTheme } from '@emotion/react';

import { ReactComponent as MdInfo } from '@shared/assets/icon/md-info.svg';
import { Tooltip, type TooltipPosition } from '@shared/ui-kit';

type InfoTooltipProps = {
  position?: TooltipPosition;
  text: string;
};

export const InfoTooltip = ({ position = 'top', text }: InfoTooltipProps) => {
  const theme = useTheme();

  return (
    <Tooltip.Container>
      <MdInfo width={14} height={14} fill={theme.colors.mono.gray500} />
      <Tooltip position={position}>{text}</Tooltip>
    </Tooltip.Container>
  );
};
