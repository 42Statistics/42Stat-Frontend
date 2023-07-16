import { useTheme } from '@emotion/react';
import { BsTriangleFill } from '@react-icons/all-files/bs/BsTriangleFill';

type ArrowProps = {
  direction: 'up' | 'down';
};

export const Arrow = ({ direction }: ArrowProps) => {
  const theme = useTheme();

  return (
    <BsTriangleFill
      size="12px"
      color={
        direction === 'up' ? theme.colors.chart.up : theme.colors.chart.down
      }
      style={{
        transform: direction === 'up' ? 'rotate(0deg)' : 'rotate(180deg)',
      }}
    />
  );
};
