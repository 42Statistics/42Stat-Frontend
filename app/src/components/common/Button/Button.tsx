import styled from '@emotion/styled';
import { Clickable } from '../Clickable';

type ButtonSize = 'md';

type ButtonProps = {
  size?: ButtonSize;
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = styled(Clickable)<ButtonProps>`
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.mono.white};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.body};
  padding: 1rem 2.2rem;
  user-select: none;
  transition: all 0.15s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;
  }

  &:active {
    box-shadow: none;
  }
`;
