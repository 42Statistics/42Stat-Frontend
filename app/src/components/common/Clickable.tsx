import styled from '@emotion/styled';

type ClickableProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  element: React.ReactNode;
};

export const Clickable = ({
  element,
  ...propsExceptElement
}: ClickableProps) => {
  return <StyledClickable {...propsExceptElement}>{element}</StyledClickable>;
};

const StyledClickable = styled.button`
  all: unset;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'default')};
`;
