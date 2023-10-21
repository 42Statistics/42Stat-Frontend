import styled from '@emotion/styled';

import { Clickable } from '@shared/ui-kit/Clickable';

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
    background: ${({ theme }) =>
      `linear-gradient(145deg, ${theme.colors.mono.white}, ${theme.colors.background.button.hover})`};
    box-shadow: ${({ theme }) =>
      `2px 2px 5px ${theme.colors.background.button.shadow}}},
      -2px -2px 5px ${theme.colors.mono.white}`};
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0px);
  }
`;
