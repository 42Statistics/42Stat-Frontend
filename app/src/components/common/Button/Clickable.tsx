import type { PropsWithReactNodeChildren } from '@/types/PropsWithChildren';
import styled from '@emotion/styled';

type ClickableProps = PropsWithReactNodeChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Clickable = styled.button<ClickableProps>`
  all: unset;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
`;
