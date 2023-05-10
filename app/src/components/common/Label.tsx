import styled from '@emotion/styled';
import { WhiteText } from './Text';

type LabelProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
};

export const Label = ({ text, ...propsExceptElement }: LabelProps) => {
  return (
    <StyledLabel {...propsExceptElement}>
      <WhiteText>{text}</WhiteText>
    </StyledLabel>
  );
};

const StyledLabel = styled.div`
  padding: 0.4rem 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
`;
