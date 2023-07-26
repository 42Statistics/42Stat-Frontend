import styled from '@emotion/styled';

export const CustomBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);

  &:hover {
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.18);
  }
`;
