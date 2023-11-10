import styled from '@emotion/styled';

type DailyActivitySquareProps = {
  color: string;
};

export const DailyActivitySquare = styled.div<DailyActivitySquareProps>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.3rem;
  background-color: ${({ color }) => color};
`;
