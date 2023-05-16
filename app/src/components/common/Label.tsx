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
  color = useTheme().colors.mono.white,
  fontWeight = useTheme().fonts.weight.regular,
  ...propsExceptElement
}: LabelProps) => {
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
  padding: 0.2rem 1.2rem;
  border-radius: 2rem;
  background-color: ${({ theme, bgColor = theme.colors.primary.default }) =>
    bgColor};
`;
