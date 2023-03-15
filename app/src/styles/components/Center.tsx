import styled from '@emotion/styled';

type CenterProps = Partial<{
  w: number | string;
  h: number | string;
}>;

export const Center = styled.div<CenterProps>`
  display: flex;
  width: ${({ w = 'auto' }) => (typeof w === 'number' ? `${w}px` : w)};
  height: ${({ h = 'auto' }) => (typeof h === 'number' ? `${h}px` : h)};
  justify-content: center;
  align-items: center;
`;
