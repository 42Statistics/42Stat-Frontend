import styled from '@emotion/styled';
import { Clickable } from '../Clickable';

type IconButtonSize = 'md';

type IconButtonProps = {
  size?: IconButtonSize;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactElement;
};

export const IconButton = styled(Clickable)<IconButtonProps>`
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: 0.3rem;
  user-select: none;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(145deg, #ffffff, #dadada);
    box-shadow:
      2px 2px 5px #cecece,
      -2px -2px 5px #ffffff;
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0px);
  }
`;
