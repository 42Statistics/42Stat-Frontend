import styled from '@emotion/styled';
import { Text } from '../Text';

type TabProps = {
  selected: boolean;
  onClick: () => void;
  children: string;
};

export const Tab = ({ selected, onClick, children }: TabProps) => {
  return (
    <Layout onClick={onClick} selected={selected}>
      <Text>{children}</Text>
    </Layout>
  );
};

type LayoutProps = {
  selected: boolean;
};

const Layout = styled.div<LayoutProps>`
  display: inline-block;
  padding: 1.4rem 2rem;
  cursor: pointer;
  transition: background-color 0.3s;

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
