import styled from '@emotion/styled';
import { UserSearchBar } from '@/components/elements/UserSearchBar';
import { HStack } from '@/styles/components';
import { Button } from '@/components/elements/Button';
import { useSessionStore } from '@/utils/stores/useSessionStore';
import { RxHamburgerMenu } from 'react-icons/rx';

export const TabletHeader = () => {
  const { toggleIsNavBarOpen } = useSessionStore();
  return (
    <TabletHeaderLayout>
      <HStack spacing="2.5rem">
        <Button
          onClick={toggleIsNavBarOpen}
          element={<RxHamburgerMenu size="2rem" />}
        />
        <UserSearchBar device="desktop" />
      </HStack>
    </TabletHeaderLayout>
  );
};

const TabletHeaderLayout = styled.header`
  width: 100%;
  padding: 2.5rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
`;
