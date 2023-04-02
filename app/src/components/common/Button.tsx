import styled from '@emotion/styled';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  element: React.ReactNode;
};

export const Button = ({ element, ...propsExceptElement }: ButtonProps) => {
  return <StyledButton {...propsExceptElement}>{element}</StyledButton>;
};

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;
