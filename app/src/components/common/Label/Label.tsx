import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Text } from '../Text';

type LabelSize = 'md';

type LabelProps = {
  size?: LabelSize;
  color?: string;
  fontWeight?: number;
  backgroundColor?: string;
  children: string;
};

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

  const computePadding = (size: LabelSize) => {
    switch (size) {
      case 'md':
        return '0.3rem 1.5rem';
      default:
        return '0.3rem 1.5rem';
    }
  };

  const computeFontSize = (size: LabelSize) => {
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

type StyledLabelProps = {
  backgroundColor: string;
  padding: string;
};

export const StyledLabel = styled.div<StyledLabelProps>`
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ theme }) => theme.radius.md};
`;
