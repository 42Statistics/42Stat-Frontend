import { forwardRef } from 'react';

import styled from '@emotion/styled';

export const WritableNum = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <StyledWritable {...props} type="number" ref={ref} autoComplete="off" />
    );
  },
);

WritableNum.displayName = 'WritableNum';

const StyledWritable = styled.input`
  all: unset;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray500};
  }
`;
