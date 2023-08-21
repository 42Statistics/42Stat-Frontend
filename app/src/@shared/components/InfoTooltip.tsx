import { useTheme } from '@emotion/react';
import { ReactComponent as MdInfo } from '@shared/assets/icon/md-info.svg';
import { Tooltip } from '@shared/ui-kit/Tooltip';

type InfoTooltipProps = {
  text: string;
};

export const InfoTooltip = ({ text }: InfoTooltipProps) => {
  const theme = useTheme();

  return (
    <Tooltip.Container>
      <MdInfo width={14} height={14} fill={theme.colors.mono.gray500} />
      <Tooltip position="top">{text}</Tooltip>
    </Tooltip.Container>
  );
};
