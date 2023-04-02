import styled from '@emotion/styled';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  all: unset;
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.size.h3};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray.default};
  }
`;
