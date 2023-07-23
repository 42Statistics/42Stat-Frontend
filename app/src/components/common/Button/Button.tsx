import styled from '@emotion/styled';
import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Clickable } from './Clickable';

type ButtonSize = 'md';

type ButtonProps = PropsWithStringChildren<{
  size?: ButtonSize;
  color?: string;
  backgroundColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;

export const Button = styled(Clickable)<ButtonProps>`
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({
    theme,
    backgroundColor = theme.colors.primary.default,
  }) => backgroundColor};
  color: ${({ theme, color = theme.colors.mono.white }) => color};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.body};
  padding: 1rem 2.2rem;
  user-select: none;
  transition: all 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 12px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0px);
  }
`;
