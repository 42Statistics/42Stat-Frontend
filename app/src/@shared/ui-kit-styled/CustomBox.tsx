import styled from '@emotion/styled';

export const CustomBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: 2px 6px 20px #eeeeee;

  &:hover {
    box-shadow: 2px 6px 20px #dddddd;
  }
`;
