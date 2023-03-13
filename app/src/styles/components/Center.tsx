import styled from '@emotion/styled';

type CenterProps = {
  w?: string;
  h?: string;
};

export const Center = styled.div<CenterProps>`
  display: flex;
  width: ${({ w = 'auto' }) => w};
  height: ${({ h = 'auto' }) => h};
  justify-content: center;
  align-items: center;
`;
