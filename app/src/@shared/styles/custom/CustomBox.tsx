import styled from '@emotion/styled';

export const CustomBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray50};
  background-color: ${({ theme }) => theme.colors.mono.white};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.mono.gray100};
  }
`;
