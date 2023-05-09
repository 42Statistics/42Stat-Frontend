import styled from '@emotion/styled';
import { forwardRef } from 'react';

export const Input = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return <StyledInput {...props} ref={ref} autoComplete="off" />;
  },
);

const StyledInput = styled.input`
  all: unset;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray300};
  }
`;
