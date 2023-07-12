import styled from '@emotion/styled';

export const NeumorphismBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 10px 10px 10px #e8e8e8, -10px -10px 10px #ffffff;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.005);
    box-shadow: 10px 10px 10px #d2d2d2, -10px -10px 10px #ffffff;
  }
`;
