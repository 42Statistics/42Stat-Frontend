import { css } from '@emotion/react';
import styled from '@emotion/styled';

type StackProps = Partial<{
  w: number | string;
  h: number | string;
  spacing: number | string;
}>;

export const hstack = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HStack = styled.div<StackProps>`
  ${hstack}
  gap: ${({ spacing = 0 }) =>
    typeof spacing === 'number' ? `${spacing}px` : spacing};
  width: ${({ w = 'auto' }) => (typeof w === 'number' ? `${w}px` : w)};
  height: ${({ h = 'auto' }) => (typeof h === 'number' ? `${h}px` : h)};
`;

export const vstack = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VStack = styled.div<StackProps>`
  ${vstack}
  gap: ${({ spacing = 0 }) =>
    typeof spacing === 'number' ? `${spacing}px` : spacing};
  width: ${({ w = 'auto' }) => (typeof w === 'number' ? `${w}px` : w)};
  height: ${({ h = 'auto' }) => (typeof h === 'number' ? `${h}px` : h)};
`;
