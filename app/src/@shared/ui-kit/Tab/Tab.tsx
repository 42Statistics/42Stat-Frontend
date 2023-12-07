import { Link } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Text } from '@shared/ui-kit/Text';

type TabProps = PropsWithStringChildren<{
  selected?: boolean;
  link: string;
}>;

export const Tab = ({ selected = false, link, children }: TabProps) => {
  const theme = useTheme();
  const color = selected
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <li>
      <StyledLink selected={selected} to={link}>
        <Text color={color}>{children}</Text>
      </StyledLink>
    </li>
  );
};

type StyledLinkProps = {
  selected: boolean;
};

const StyledLink = styled(Link)<StyledLinkProps>`
  display: block;
  padding: 1.4rem 2rem;
  transition: background-color 0.3s;
  outline-offset: -0.2rem;

  border-bottom: ${({ theme, selected }) =>
    selected && `3px solid ${theme.colors.primary.default}`};

  color: ${({ theme, selected }) => selected && theme.colors.primary.default};
  font-weight: ${({ theme, selected }) => selected && theme.fonts.weight.bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.element.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.element.active};
  }
`;
