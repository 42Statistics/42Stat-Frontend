import { Theme, useTheme } from '@emotion/react';
import { rgba } from 'emotion-rgba';

import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { StyledLabel, Text } from '@shared/ui-kit';

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
  const color = computeColor(theme, type);
  const backgroundColor = rgba(color, 0.15);
  const padding = computePadding(size);
  const fontSize = computeFontSize(theme, size);

  return (
    <StyledLabel backgroundColor={backgroundColor} padding={padding}>
      <Text color={color} fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </Text>
    </StyledLabel>
  );
};

const computeColor = (theme: Theme, type: EvalLogLabelType) => {
  switch (type) {
    case 'positive':
      return theme.colors.evaluation.pass;
    case 'neutral':
      return theme.colors.evaluation.warning;
    case 'negative':
      return theme.colors.evaluation.fail;
    case 'none':
      return theme.colors.mono.gray500;
    default:
      return theme.colors.mono.gray500;
  }
};
const computePadding = (size: EvalLogLabelSize) => {
  switch (size) {
    case 'md':
      return '0.2rem 1.2rem';
    default:
      return '0.2rem 1.2rem';
  }
};

const computeFontSize = (theme: Theme, size: EvalLogLabelSize) => {
  switch (size) {
    case 'md':
      return theme.fonts.size.body2;
    default:
      return theme.fonts.size.body2;
  }
};
