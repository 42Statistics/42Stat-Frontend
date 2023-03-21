import { SearchIconSvg } from '@/assets/icons';
import { Input } from '@/components/elements/Input';
import { useUserSearchBar } from './hooks/useUserSearchBar';
import { css, Theme, useTheme } from '@emotion/react';

type UserSearchBarProps = {
  device: Device;
};

export const UserSearchBar = ({ device }: UserSearchBarProps) => {
  const { input, handleChange } = useUserSearchBar();
  const theme = useTheme();

  return (
    <div
      css={
        device === 'desktop'
          ? DesktopUserSearchBarStyle
          : MobileUserSearchBarStyle(theme)
      }
    >
      <SearchIconSvg />
      <Input
        onChange={handleChange}
        value={input}
        placeholder="유저명을 입력해주세요"
      />
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
