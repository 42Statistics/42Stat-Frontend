import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';

import { tooltipAtom } from '@core/atoms/tooltipAtom';

import { ReactComponent as MdInfo } from '@shared/assets/icon/md-info.svg';
import { ReactComponent as MdWarning } from '@shared/assets/icon/md-warning.svg';
import type { TooltipPosition } from '@shared/types/TooltipPosition';

type IconTooltipProps = {
  type?: 'info' | 'warning';
  position?: TooltipPosition;
  size?: string;
  text: string;
};

export const IconTooltip = ({
  type = 'info',
  position = 'top',
  size = '14',
  text,
}: IconTooltipProps) => {
  const theme = useTheme();
  const setTooltip = useSetAtom(tooltipAtom);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setTooltip({
      ref: e.currentTarget,
      position,
      text,
    });
  };
  const handleMouseLeave = () => {
    setTooltip({
      ref: null,
      position,
      text,
    });
  };

  const Icon = type === 'info' ? MdInfo : MdWarning;
  const iconColor =
    type === 'info' ? theme.colors.mono.gray500 : theme.colors.semantic.warning;

  return (
    <Layout onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Icon width={size} height={size} fill={iconColor} />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
