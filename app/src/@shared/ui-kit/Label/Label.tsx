import { useTheme, type Theme } from '@emotion/react';
import styled from '@emotion/styled';

import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Text } from '@shared/ui-kit/Text';

type LabelSize = 'md';

export type LabelProps = PropsWithStringChildren<{
  size?: LabelSize;
  color?: string;
  fontWeight?: number;
  backgroundColor?: string;
}>;

export const Label = ({
  size = 'md',
  color,
  fontWeight,
  backgroundColor,
  children,
}: LabelProps) => {
  const theme = useTheme();

  color = color ?? theme.colors.mono.white;
  backgroundColor = backgroundColor ?? theme.colors.primary.default;
  fontWeight = fontWeight ?? theme.fonts.weight.regular;
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

type StyledLabelProps = {
  backgroundColor: string;
  padding: string;
};

export const StyledLabel = styled.div<StyledLabelProps>`
  display: inline-block;
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ theme }) => theme.radius.md};
  user-select: none;
`;

const computePadding = (size: LabelSize) => {
  switch (size) {
    case 'md':
      return '0.3rem 1.5rem';
    default:
      return '0.3rem 1.5rem';
  }
};

const computeFontSize = (theme: Theme, size: LabelSize) => {
  switch (size) {
    case 'md':
      return theme.fonts.size.body2;
    default:
      return theme.fonts.size.body2;
  }
};
