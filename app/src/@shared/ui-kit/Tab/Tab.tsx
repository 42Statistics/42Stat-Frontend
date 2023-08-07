import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Text } from '@shared/ui-kit';
import { Link } from 'react-router-dom';

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
      <Link to={link}>
        <Layout selected={selected} tabIndex={0}>
          <Text color={color}>{children}</Text>
        </Layout>
      </Link>
    </li>
  );
};

type LayoutProps = {
  selected: boolean;
};

const Layout = styled.div<LayoutProps>`
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
