import styled from '@emotion/styled';

type DailyActivitySquareProps = {
  color: string;
};

export const DailyActivitySquare = styled.div<DailyActivitySquareProps>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.5rem;
  background-color: ${({ color }) => color};
`;
