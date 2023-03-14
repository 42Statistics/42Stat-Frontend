import { hstack } from '@/styles/components';
import styled from '@emotion/styled';
import { UserSearchBar } from './UserSearchBar';

export const Header = () => {
  return (
    <HeaderLayout>
      <UserSearchBar />
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  ${hstack}
  width: 100%;
  padding: 30px 0 30px 50px;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mono.gray.default};
`;
