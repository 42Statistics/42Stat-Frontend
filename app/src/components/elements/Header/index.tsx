import { Center, HStack, VStack } from '@/styles/components';
import { Desktop, Mobile } from '@/styles/responsive';
import styled from '@emotion/styled';
import { Logo } from '../Logo';
import { UserSearchBar } from './UserSearchBar';

export const Header = () => {
  return (
    <>
      <Desktop>
        <DesktopHeaderLayout>
          <UserSearchBar />
        </DesktopHeaderLayout>
      </Desktop>
      <Mobile>
        <MobileHeaderLayout>
          <VStack w="100%" spacing="10px">
            <Logo />
            <UserSearchBar />
          </VStack>
        </MobileHeaderLayout>
      </Mobile>
    </>
  );
};

const DesktopHeaderLayout = styled.div`
  width: 100%;
  padding: 30px 0 30px 50px;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mono.gray.default};
`;

const MobileHeaderLayout = styled.div``;
