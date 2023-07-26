import { useTheme } from '@emotion/react';
import { ReactComponent as TriangleDown } from '@shared/assets/icon/triangle-down.svg';
import { ReactComponent as TriangleUp } from '@shared/assets/icon/triangle-up.svg';
import { H3Text, HStack } from '@shared/ui-kit';

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
      <ArrowSvg width={12} height={12} fill={color} />
      <H3Text color={color}>{Math.abs(diff).toLocaleString()}</H3Text>
    </HStack>
  );
};
