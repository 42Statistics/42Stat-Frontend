import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { StackProps } from '@utils/types/StackProps';

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
