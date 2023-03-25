import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  element: ReactNode;
};

export const Button = ({ element, ...propsExceptElement }: ButtonProps) => {
  return <StyledButton {...propsExceptElement}>{element}</StyledButton>;
};

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;
