import { Input } from '@/components/common';
import { isEnterKeyReleased } from '@/utils/isEnterKeyReleased';
import { Device } from '@/utils/types/Device';
import { css, Theme, useTheme } from '@emotion/react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSearchBar } from './hooks/useSearchBar';

type UserSearchBarProps = {
  device: Device;
};

// TODO: 실제 이름 매칭되는 유저 리스트 리턴하도록 변경
const searchUser = (input: string) => {
  console.log(input);
};

export const UserSearchBar = ({ device }: UserSearchBarProps) => {
  const { input, handleChange } = useSearchBar(searchUser);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // e.preventDefault(); // 이걸 넣으면 입력이 안됨
    if (isEnterKeyReleased(e)) {
      navigate(`/profile/${input}`);
    }
  };

  return (
    <div
      css={
        device === 'desktop'
          ? DesktopUserSearchBarStyle
          : MobileUserSearchBarStyle(theme)
      }
    >
      <MdSearch size="24px" />
      <Input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="유저명을 입력해주세요"
      />
    </div>
  );
};

const DesktopUserSearchBarStyle = css`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

const MobileUserSearchBarStyle = (theme: Theme) => css`
  display: flex;
  gap: 2rem;
  width: 100%;
  padding: 1.2rem 3rem;
  border-radius: 2rem;
  background-color: ${theme.colors.mono.white};
`;
