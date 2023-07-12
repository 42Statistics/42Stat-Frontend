import styled from '@emotion/styled';
import { Clickable } from './Clickable';

type ButtonSize = 'md';

type ButtonProps = {
  size?: ButtonSize;
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = styled(Clickable)<ButtonProps>`
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.mono.white};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
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
