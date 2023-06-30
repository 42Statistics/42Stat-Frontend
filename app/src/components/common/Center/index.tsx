import { css } from '@emotion/react';
import styled from '@emotion/styled';

type CenterProps = Partial<{
  w: string;
  h: string;
}>;

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div<CenterProps>`
  ${center}
  width: ${({ w = '100%' }) => w};
  height: ${({ h = '100%' }) => h};
`;
