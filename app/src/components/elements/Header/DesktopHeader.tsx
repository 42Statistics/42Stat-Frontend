import { HStack } from '@/components/common';
import styled from '@emotion/styled';
import { UserSearchBar } from './UserSearchBar';

export const DesktopHeader = () => {
  return (
    <DesktopHeaderLayout>
      <HStack spacing="2.5rem">
        <UserSearchBar device="desktop" />
      </HStack>
    </DesktopHeaderLayout>
  );
};

const DesktopHeaderLayout = styled.header`
  width: 100%;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
`;
