import { useTheme } from '@emotion/react';
import { ReactComponent as TriangleDown } from '@shared/assets/icon/triangle-down.svg';
import { ReactComponent as TriangleUp } from '@shared/assets/icon/triangle-up.svg';
import { Body1Text, HStack } from '@shared/ui-kit';

type DiffProps = {
  number1: number;
  number2: number;
};

export const Diff = ({ number1, number2 }: DiffProps) => {
  const diff = number1 - number2;
  const theme = useTheme();
  const color = diff > 0 ? theme.colors.chart.up : theme.colors.chart.down;
  const ArrowSvg = diff > 0 ? TriangleUp : TriangleDown;

  return (
    <HStack align="baseline" spacing="0.5rem">
      <ArrowSvg width={12} height={12} fill={color} />
      <Body1Text color={color}>{Math.abs(diff).toLocaleString()}</Body1Text>
    </HStack>
  );
};
