import { PropsWithStringChildren } from '@/types/PropsWithChildren';
import { useTheme } from '@emotion/react';
import { rgba } from 'emotion-rgba';
import { Text } from '../Text';
import { StyledLabel } from './Label';

type EvalLogLabelSize = 'md';
export type EvalLogLabelType = 'positive' | 'neutral' | 'negative' | 'none';

type EvalLogLabelProps = PropsWithStringChildren<{
  size?: EvalLogLabelSize;
  type: EvalLogLabelType;
  fontWeight?: number;
}>;

export const EvalLogLabel = ({
  size = 'md',
  type,
  fontWeight,
  children,
}: EvalLogLabelProps) => {
  const theme = useTheme();
  fontWeight = fontWeight ?? theme.fonts.weight.regular;

  const computeColor = (type: EvalLogLabelType) => {
    switch (type) {
      case 'positive':
        return theme.colors.evaluation.pass;
      case 'neutral':
        return theme.colors.evaluation.warning;
      case 'negative':
        return theme.colors.evaluation.fail;
      case 'none':
        return theme.colors.mono.gray300;
      default:
        return theme.colors.mono.gray300;
    }
  };

  const color = computeColor(type);
  const backgroundColor = rgba(color, 0.15);

  const computePadding = (size: EvalLogLabelSize) => {
    switch (size) {
      case 'md':
        return '0.2rem 1.2rem';
      default:
        return '0.2rem 1.2rem';
    }
  };

  const computeFontSize = (size: EvalLogLabelSize) => {
    switch (size) {
      case 'md':
        return theme.fonts.size.body;
      default:
        return theme.fonts.size.body;
    }
  };

  const padding = computePadding(size);
  const fontSize = computeFontSize(size);

  return (
    <StyledLabel backgroundColor={backgroundColor} padding={padding}>
      <Text color={color} fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Text>
    </StyledLabel>
  );
};
