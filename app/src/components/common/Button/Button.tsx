import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
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
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.body};
  padding: 0.8rem 1.6rem;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.primary.default, 0.9)};
    transform: translateY(-1px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.default};
    transform: translateY(0px);
  }
`;
