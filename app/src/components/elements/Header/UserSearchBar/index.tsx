import { SearchIconSvg } from '@/assets/icons';
import styled from '@emotion/styled';
import { Desktop, Mobile } from '@/styles/responsive';
import { Input } from '@/components/elements/Input';
import { useUserSearchBar } from './hooks/useUserSearchBar';

export const UserSearchBar = () => {
  const { input, handleChange } = useUserSearchBar();

  return (
    <>
      <Desktop>
        <DesktopUserSearchBarLayout>
          <SearchIconSvg />
          <Input
            onChange={handleChange}
            value={input}
            placeholder="유저명을 입력해주세요"
          />
        </DesktopUserSearchBarLayout>
      </Desktop>
      <Mobile>
        <MobileUserSearchBarLayout>
          <SearchIconSvg />
          <Input
            onChange={handleChange}
            value={input}
            placeholder="유저명을 입력해주세요"
          />
        </MobileUserSearchBarLayout>
      </Mobile>
    </>
  );
};

const DesktopUserSearchBarLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const MobileUserSearchBarLayout = styled.div`
  display: flex;
  gap: 20px;
  padding: 12px 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
