import styled from '@emotion/styled';

type ClickableProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Clickable = styled.button<ClickableProps>`
  all: unset;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'default')};
`;
