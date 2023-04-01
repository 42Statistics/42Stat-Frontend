import styled from '@emotion/styled';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
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
