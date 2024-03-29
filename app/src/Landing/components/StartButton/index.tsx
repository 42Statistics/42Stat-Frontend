import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Clickable } from '@shared/ui-kit';

type StartButtonProps = PropsWithStringChildren<{
  onClick: () => void;
}>;

export const StartButton = styled(Clickable)<StartButtonProps>`
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(
    122deg,
    rgba(34, 160, 195, 1) 0%,
    rgba(109, 45, 253, 1) 120%
  );
  color: ${({ theme }) => theme.colors.mono.white};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.h3};
  padding: 1.2rem 2.4rem;
  user-select: none;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.primary.default, 0.9)};
    transform: translateY(-1.5px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.default};
    transform: translateY(0px);
  }
`;
