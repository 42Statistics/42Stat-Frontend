import triangle_down from '@assets/icon/triangle-down.svg';
import styled from '@emotion/styled';

export const Select = styled.select`
  all: unset;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray50};
  border-radius: ${({ theme }) => theme.radius.md};
  background: url(${triangle_down}) no-repeat right 2rem center #f9f9f9;
  background-size: 10px;
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray100};
  }

  &:focus-visible {
    outline: 2px solid blue;
  }
`;
