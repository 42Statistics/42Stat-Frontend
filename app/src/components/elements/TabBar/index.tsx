import { HStack } from '@/styles/components';
import styled from '@emotion/styled';
import { MenuItem } from './MenuItem';

// TODO: User Profile 맨 오른쪽에 추가
export const TabBar = () => {
  return (
    <TabBarLayout>
      <HStack as="ul" w="100%" css={{ justifyContent: 'space-around' }}>
        <MenuItem menu="Home" location={location} />
        <MenuItem menu="Total" location={location} />
        <MenuItem menu="About" location={location} />
        <MenuItem menu="Settings" location={location} />
        <p>박용준</p>
      </HStack>
    </TabBarLayout>
  );
};

const TabBarLayout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 14px 20px;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
