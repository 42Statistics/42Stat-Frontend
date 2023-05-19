import styled from '@emotion/styled';
import { ReactTabsFunctionComponent, Tab, TabProps } from 'react-tabs';

const CustomTab: ReactTabsFunctionComponent<TabProps> = (props) => (
  <StyledTab {...props} />
);

CustomTab.tabsRole = 'Tab';

const StyledTab = styled(Tab)`
  all: unset;
  padding: 1.4rem 2rem;
  color: ${({ theme, selected }) =>
    !selected ? theme.colors.mono.black : theme.colors.primary.default};
  border-bottom: ${({ theme, selected }) =>
    selected && `3px solid ${theme.colors.primary.default}`};
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`;

export { CustomTab as Tab };
