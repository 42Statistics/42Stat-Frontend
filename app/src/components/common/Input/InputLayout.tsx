import styled from '@emotion/styled';

export const InputLayout = styled.div`
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.5s;

  box-shadow: 8px 8px 10px #e0e0e0, -8px -8px 10px #ffffff;

  &:hover {
    box-shadow: 8px 8px 10px #cccccc, -8px -8px 10px #ffffff;
  }
`;
