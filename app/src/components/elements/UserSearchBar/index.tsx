import { Input } from '@/components/common';
import { useUserSearchBar } from './hooks/useUserSearchBar';
import { css, Theme, useTheme } from '@emotion/react';
import { Device } from '@/utils/types/Device';
import { MdSearch } from 'react-icons/md';

type UserSearchBarProps = {
  device: Device;
};

export const UserSearchBar = ({ device }: UserSearchBarProps) => {
  const { handleChange } = useUserSearchBar();
  const theme = useTheme();

  return (
    <div
      css={
        device === 'desktop'
          ? DesktopUserSearchBarStyle
          : MobileUserSearchBarStyle(theme)
      }
    >
      <MdSearch size="24px" />
      <Input onChange={handleChange} placeholder="유저명을 입력해주세요" />
    </div>
  );
};

const DesktopUserSearchBarStyle = css`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

const MobileUserSearchBarStyle = (theme: Theme) => css`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 1.2rem 3rem;
  border-radius: 2rem;
  background-color: ${theme.colors.mono.white};
`;
