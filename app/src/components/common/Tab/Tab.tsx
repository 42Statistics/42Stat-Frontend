import styled from '@emotion/styled';
import { ReactTabsFunctionComponent, Tab, TabProps } from 'react-tabs';

const CustomTab: ReactTabsFunctionComponent<TabProps> = (props) => (
  <StyledTab {...props} />
);

CustomTab.tabsRole = 'Tab';

const StyledTab = styled(Tab)`
  all: unset;
  padding: 1.4rem 2rem;
  color: ${({ theme }) => theme.colors.mono.white};
  opacity: ${({ selected }) => (selected ? 1 : 0.8)};
  border-bottom: ${({ theme, selected }) =>
    selected && `3px solid ${theme.colors.primary.light}`};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export { CustomTab as Tab };
