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
          <VStack w="100%" spacing="1rem">
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
  padding: 3rem 0 3rem 5rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.default};
`;

const MobileHeaderLayout = styled.div``;
