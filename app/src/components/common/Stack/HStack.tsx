import type { StackProps } from '@/types/StackProps';
import styled from '@emotion/styled';

export const HStack = styled.div<StackProps>`
  display: flex;
  justify-content: center;
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  gap: ${({ spacing = '0' }) => spacing};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  width: ${({ w = 'auto' }) => w};
  height: ${({ h = 'auto' }) => h};
`;
