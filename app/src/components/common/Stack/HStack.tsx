import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { StackProps } from '@utils/types/StackProps';

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
