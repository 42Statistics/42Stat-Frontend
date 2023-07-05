import styled from '@emotion/styled';

type CenterProps = Partial<{
  w: string;
  h: string;
}>;

export const Center = styled.div<CenterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w = '100%' }) => w};
  height: ${({ h = '100%' }) => h};
`;
