import styled from '@emotion/styled';

export const StyledInfoTable = styled.table`
  text-align: center;

  th,
  td {
    padding: 0.8rem 2rem;
  }

  & td:first-of-type {
    color: ${({ theme }) => theme.colors.primary.default};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }
`;
