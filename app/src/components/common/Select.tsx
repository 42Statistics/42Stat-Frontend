import styled from '@emotion/styled';

export const Select = styled.select`
  all: unset;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: url('/down-arrow.svg') no-repeat right 2rem center #f9f9f9;
  box-shadow: 6px 6px 13px #d2d2d2, -6px -6px 13px #ffffff;
`;
