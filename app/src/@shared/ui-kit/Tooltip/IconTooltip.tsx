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

/* 직접 컴포넌트를 지정해서 툴팁을 사용하고 싶은 경우 IconTooltip의 Layout에
설정한 것처럼 해당 컴포넌트에서 설정해주면 됩니다. */
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
