import styled from '@emotion/styled';
import triangle_down from '@shared/assets/icon/triangle-down.svg';

// will depreciated
const FormSelect = styled.select`
  all: unset;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) =>
    `url(${triangle_down}) no-repeat right 2rem center ${theme.colors.mono.white}`};
  background-size: 10px;
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }

  &:focus-visible {
    outline: 2px solid blue;
  }
`;

export default FormSelect;
