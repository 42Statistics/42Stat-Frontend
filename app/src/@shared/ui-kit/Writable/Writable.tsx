import { forwardRef } from 'react';

import styled from '@emotion/styled';

export const Writable = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return <StyledWritable {...props} ref={ref} autoComplete="off" />;
  },
);

Writable.displayName = 'Writable';

const StyledWritable = styled.input`
  all: unset;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray500};
  }
`;
