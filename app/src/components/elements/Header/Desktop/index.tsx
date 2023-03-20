import styled from '@emotion/styled';
import { UserSearchBar } from '../UserSearchBar';

export const DesktopHeader = () => {
  return (
    <DesktopHeaderLayout>
      <UserSearchBar />
    </DesktopHeaderLayout>
  );
};

const DesktopHeaderLayout = styled.div`
  width: 100%;
  padding: 2.5rem 5rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
`;
