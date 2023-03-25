import styled from '@emotion/styled';
import { UserSearchBar } from '@/components/elements/UserSearchBar';
import { HStack, Button } from '@/components/common';
import { RxHamburgerMenu } from 'react-icons/rx';
import { toggleIsNavBarOpenAtom } from '@/utils/atoms/isNavBarOpenAtom';
import { useAtom } from 'jotai';

export const TabletHeader = () => {
  const [, toggleIsNavBarOpen] = useAtom(toggleIsNavBarOpenAtom);

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
