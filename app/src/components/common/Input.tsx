import styled from '@emotion/styled';
import { InputHTMLAttributes, forwardRef } from 'react';

// TODO: forwardRef 이해하기
export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

// export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
//   return <StyledInput {...props} />;
// };

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.size.h3};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray.default};
  }
`;
