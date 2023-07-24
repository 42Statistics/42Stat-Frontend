import styled from '@emotion/styled';
import type { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';

type ClickableProps = PropsWithReactNodeChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  forwardRef?: React.Ref<HTMLButtonElement>;
};

export const Clickable = ({ forwardRef, ...rest }: ClickableProps) => {
  return <StyledClickable ref={forwardRef} {...rest} />;
};

const StyledClickable = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  &:focus-visible {
    transition: none;
    outline: 1.6px solid blue;
  }
`;
