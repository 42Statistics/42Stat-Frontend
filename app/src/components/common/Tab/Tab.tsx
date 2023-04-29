import styled from '@emotion/styled';
import { ReactTabsFunctionComponent, Tab, TabProps } from 'react-tabs';

const CustomTab: ReactTabsFunctionComponent<TabProps> = (props) => (
  <StyledTab {...props} />
);

CustomTab.tabsRole = 'Tab';

const StyledTab = styled(Tab)`
  all: unset;
  padding: 1.4rem 2rem;
  border-bottom: ${({ theme, selected }) =>
    selected && `3px solid ${theme.colors.primary.default}`};
  background-color: transparent;
  cursor: pointer;
`;

export { CustomTab as Tab };
