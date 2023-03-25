import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

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
