import { css } from '@emotion/react';
import styled from '@emotion/styled';

type CenterProps = Partial<{
  w: number | string;
  h: number | string;
}>;

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div<CenterProps>`
  ${center}
  width: ${({ w = 'auto' }) => (typeof w === 'number' ? `${w}px` : w)};
  height: ${({ h = 'auto' }) => (typeof h === 'number' ? `${h}px` : h)};
`;
