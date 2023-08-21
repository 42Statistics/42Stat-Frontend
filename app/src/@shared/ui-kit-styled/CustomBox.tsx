import styled from '@emotion/styled';

export const CustomBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  box-shadow: ${({ theme }) => theme.colors.background.box.shadow.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.background.box.shadow.hover};
  }
`;
