import { Button, HStack } from '@/components/common';
import { UserSearchBar } from '@/components/elements/SearchBar';
import { isNavBarOpenAtom } from '@/utils/atoms/isNavBarOpenAtom';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { RxHamburgerMenu } from 'react-icons/rx';

export const TabletHeader = () => {
  const setIsNavBarOpen = useSetAtom(isNavBarOpenAtom);

  return (
    <TabletHeaderLayout>
      <HStack spacing="2.5rem">
        <Button
          onClick={() => setIsNavBarOpen((cur) => !cur)}
          element={<RxHamburgerMenu size="20px" />}
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
