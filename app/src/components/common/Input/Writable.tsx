import styled from '@emotion/styled';
import { forwardRef } from 'react';

export const Writable = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return <StyledWritable {...props} ref={ref} autoComplete="off" />;
  },
);

Writable.displayName = 'Input';

const StyledWritable = styled.input`
  all: unset;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray300};
  }
`;
