import styled from '@emotion/styled';
import { UserSearchBar } from '@/components/elements/UserSearchBar';
import { HStack } from '@/styles/components';

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
  padding: 2.5rem 5rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
`;
