import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Text } from './Text';

type LabelProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: string;
  bgColor?: string;
  fontWeight?: number;
  text: string;
};

export const Label = ({
  text,
  color,
  fontWeight,
  ...propsExceptElement
}: LabelProps) => {
  const theme = useTheme();
  color = color ?? theme.colors.mono.white;
  fontWeight = fontWeight ?? theme.fonts.weight.regular;

  return (
    <StyledLabel {...propsExceptElement}>
      <Text color={color} fontWeight={fontWeight}>
        {text}
      </Text>
    </StyledLabel>
  );
};

type StyledLabelProps = Omit<LabelProps, 'text' | 'color'>;

const StyledLabel = styled.div<StyledLabelProps>`
  padding: 0.3rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme, bgColor = theme.colors.primary.default }) =>
    bgColor};
`;
