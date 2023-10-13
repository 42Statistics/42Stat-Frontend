import styled from '@emotion/styled';
import { forwardRef } from 'react';

export const WritableNum = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const { value, ...restProps } = props;

    return (
      <StyledWritable
        {...restProps}
        value={value?.toString()}
        ref={ref}
        autoComplete="off"
      />
    );
  },
);

WritableNum.displayName = 'WritableNum';

const StyledWritable = styled.input`
  all: unset;
  width: 100%;
  type: number;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray500};
  }
`;
