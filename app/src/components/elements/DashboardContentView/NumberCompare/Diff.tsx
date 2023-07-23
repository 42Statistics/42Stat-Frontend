import { HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { ReactComponent as TriangleDown } from '@shared/assets/icon/triangle-down.svg';
import { ReactComponent as TriangleUp } from '@shared/assets/icon/triangle-up.svg';

type DiffProps = {
  curr: number;
  last: number;
};

export const Diff = ({ curr, last }: DiffProps) => {
  const diff = curr - last;
  const theme = useTheme();
  const color = diff > 0 ? theme.colors.chart.up : theme.colors.chart.down;
  const ArrowSvg = diff > 0 ? TriangleUp : TriangleDown;

  return (
    <HStack align="baseline" spacing="0.5rem">
      <ArrowSvg width={10} height={10} fill={color} />
      <Text color={color}>{Math.abs(diff).toLocaleString()}</Text>
    </HStack>
  );
};
