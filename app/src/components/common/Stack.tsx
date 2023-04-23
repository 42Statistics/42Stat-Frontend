import { css } from '@emotion/react';
import styled from '@emotion/styled';

type StackProps = Partial<{
  w: string;
  h: string;
  spacing: string;
  align: string;
  justify: string;
  wrap: string;
}>;

export const hstack = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HStack = styled.div<StackProps>`
  ${hstack}
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ spacing = '0' }) => spacing};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  width: ${({ w = 'auto' }) => w};
  height: ${({ h = 'auto' }) => h};
`;

export const vstack = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VStack = styled.div<StackProps>`
  ${vstack}
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ spacing = '0' }) => spacing};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  width: ${({ w = 'auto' }) => w};
  height: ${({ h = 'auto' }) => h};
`;
