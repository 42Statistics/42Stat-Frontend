import styled from '@emotion/styled';

type DailyActivitySquareProps = {
  color: string;
  hasHoverEffect?: boolean;
};

export const DailyActivitySquare = styled.div<DailyActivitySquareProps>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.5rem;
  background-color: ${({ color }) => color};

  ${({ theme, hasHoverEffect = false }) =>
    hasHoverEffect &&
    `
  &:hover {
    border: 2px solid ${theme.colors.mono.black};
  }
`}
`;
