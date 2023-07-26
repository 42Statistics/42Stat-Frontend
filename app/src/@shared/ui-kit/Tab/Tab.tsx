import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Clickable, Text } from '@shared/ui-kit';

type TabProps = PropsWithStringChildren<{
  selected?: boolean;
  onClick: () => void;
}>;

export const Tab = ({ selected = false, onClick, children }: TabProps) => {
  const theme = useTheme();
  const color = selected
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <Layout onClick={onClick} selected={selected}>
      <Text color={color}>{children}</Text>
    </Layout>
  );
};

type LayoutProps = {
  selected: boolean;
};

const Layout = styled(Clickable)<LayoutProps>`
  display: inline-block;
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
