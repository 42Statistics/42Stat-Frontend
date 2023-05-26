import { Clickable, HStack, Text } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { useCallback, useState } from 'react';
import { UserSearchModal } from './UserSearchModal';

// TODO: SearchBar 추상화
export const MobileUserSearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => setIsModalOpen((cur) => !cur), []);
  const theme = useTheme();

  return (
    <>
      <Clickable
        onClick={toggleModal}
        element={
          <MobileUserSearchBarLayout>
            <HStack spacing="2rem">
              <MdSearch id="search-icon" size="24px" />
              <Text color={theme.colors.mono.gray300} css={{ width: '12rem' }}>
                Search...
              </Text>
            </HStack>
          </MobileUserSearchBarLayout>
        }
      />
      <UserSearchModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

const MobileUserSearchBarLayout = styled.div`
  position: relative;
  padding: 1rem 2rem;
  border-radius: 2rem;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.mono.white};

  box-shadow: 8px 8px 10px #d8d8d8, -8px -8px 10px #ffffff;
`;
