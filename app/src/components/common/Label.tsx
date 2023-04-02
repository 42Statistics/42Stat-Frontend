import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Text } from './Text';

type LabelProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
};

export const Label = ({ text, ...propsExceptElement }: LabelProps) => {
  const theme = useTheme();

  return (
    <StyledLabel {...propsExceptElement}>
      <Text color={theme.colors.mono.white}>{text}</Text>
    </StyledLabel>
  );
};

const StyledLabel = styled.div`
  padding: 0.4rem 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
`;
